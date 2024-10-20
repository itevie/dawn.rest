use std::path::PathBuf;

use database::DawnFile;
use rocket::fairing::{Fairing, Info, Kind};
use rocket::http::Header;
use rocket::serde::json::Json;
use rocket::tokio::fs;
use rocket::{fs::NamedFile, State};
use rocket::{Request, Response};
use serde::Deserialize;
use sqlx::{Executor, Pool, Sqlite, SqlitePool};
use util::write_file_from_data_url;
use uuid::Uuid;

mod database;
mod util;

#[macro_use]
extern crate rocket;

#[get("/<path..>")]
async fn index(path: PathBuf) -> Option<NamedFile> {
    let path = std::env::current_dir()
        .unwrap()
        .join("../build")
        .join(&path);

    // Check if it is a file in the build folder
    if path.is_file() {
        return Some(NamedFile::open(path).await.unwrap());
    }

    // Else, serve the unmatched file
    NamedFile::open(std::env::current_dir().unwrap().join("../build/index.html"))
        .await
        .ok()
}

#[get("/api/file-list")]
async fn file_list(db: &State<Pool<Sqlite>>) -> Json<Vec<DawnFile>> {
    let rows = sqlx::query_as::<_, DawnFile>("SELECT * FROM files;")
        .fetch_all(db.inner())
        .await
        .unwrap();

    Json(rows)
}

#[options["/<_..>"]]
fn fuck_options() -> String {
    String::new()
}

#[derive(Debug, PartialEq, Eq, Deserialize)]
pub struct UploadFileData {
    title: String,
    description: String,
    tags: Vec<String>,
    script: String,
    file: Option<String>,
    auth: String,
}

#[derive(Responder)]
pub enum FileUploadResponses {
    Json(Json<DawnFile>),
    String(String),
}

#[post("/api/admin/file-upload", format = "json", data = "<file_options>")]
pub async fn upload_file(
    file_options: Json<UploadFileData>,
    admin_key: &State<Uuid>,
    db: &State<Pool<Sqlite>>,
) -> Option<FileUploadResponses> {
    if file_options.0.auth != admin_key.to_string() {
        return None;
    }

    if let Some(ref file_data) = file_options.0.file {
        let file_name = format!(
            "{}.mp3",
            file_options.title.replace(" ", "-").to_lowercase()
        );

        let result = sqlx::query_as::<_, DawnFile>("INSERT INTO files (title, description, script, tags, file_path) VALUES (?1, ?2, ?3, ?4, ?5) RETURNING *;")
        .bind(file_options.0.title)
        .bind(file_options.0.description)
        .bind(file_options.0.script)
        .bind(file_options.0.tags.join(","))
        .bind(file_name.clone())
        .fetch_one(db.inner()).await.unwrap();

        write_file_from_data_url(
            &file_data,
            std::env::current_dir()
                .unwrap()
                .join(format!("./files/{}", file_name)),
        )
        .unwrap();

        return Some(FileUploadResponses::Json(Json(result)));
    }

    Some(FileUploadResponses::String(String::from(
        "OK to upload file",
    )))
}

pub struct CORS;

#[rocket::async_trait]
impl Fairing for CORS {
    fn info(&self) -> Info {
        Info {
            name: "Add CORS headers to responses",
            kind: Kind::Response,
        }
    }

    async fn on_response<'r>(&self, _request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new(
            "Access-Control-Allow-Methods",
            "POST, GET, PATCH, OPTIONS",
        ));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}

#[launch]
async fn rocket() -> _ {
    let mut path = std::env::current_dir().unwrap();
    path.push("./data.db");

    if !path.exists() {
        fs::write(path.clone(), "").await.unwrap();
    }

    let pool = SqlitePool::connect(&format!(
        "sqlite:{}",
        path.canonicalize().unwrap().display().to_string()
    ))
    .await
    .unwrap();

    pool.execute(include_str!("./setup.sql")).await.unwrap();

    let uuid = Uuid::new_v4();
    println!("Admin key is: {}", uuid.to_string());

    rocket::build()
        .manage(pool)
        .manage(uuid)
        .attach(CORS)
        .mount("/", routes![fuck_options, upload_file, file_list, index])
}
