use std::convert::Infallible;
use std::path::PathBuf;

use database::DawnFile;
use rocket::fairing::{Fairing, Info, Kind};
use rocket::fs::NamedFile;
use rocket::http::Header;
use rocket::request::{self, FromRequest};
use rocket::response::content;
use rocket::serde::json::Json;
use rocket::tokio::fs;
use rocket::{Request, Response, State};
use routes::meta_data::check_crawler;
use sqlx::{Executor, Pool, Sqlite, SqlitePool};
use uuid::Uuid;

mod database;
mod util;

mod routes;

#[macro_use]
extern crate rocket;

#[derive(Responder)]
pub enum ReturnOptions {
    String(String),
    DawnFile(Json<DawnFile>),
    HTML(content::RawHtml<String>),
    NamedFile(NamedFile),
}

#[get("/<path..>")]
async fn index(path: PathBuf, db: &State<Pool<Sqlite>>, ua: UserAgent) -> Option<ReturnOptions> {
    if let Some(meta) = check_crawler(ua.0, path.display().to_string(), db).await {
        return Some(ReturnOptions::HTML(content::RawHtml(meta)));
    }

    let path = std::env::current_dir()
        .unwrap()
        .join("../build")
        .join(&path);

    // Check if it is a file in the build folder
    if path.is_file() {
        return Some(ReturnOptions::NamedFile(
            NamedFile::open(path).await.unwrap(),
        ));
    }

    // Else, serve the unmatched file
    Some(ReturnOptions::NamedFile(
        NamedFile::open(std::env::current_dir().unwrap().join("../build/index.html"))
            .await
            .ok()
            .unwrap(),
    ))
}

#[options["/<_..>"]]
fn fuck_options() -> String {
    String::new()
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

pub struct UserAgent(String);

#[async_trait]
impl<'r> FromRequest<'r> for UserAgent {
    type Error = Infallible;

    async fn from_request(request: &'r Request<'_>) -> request::Outcome<Self, Self::Error> {
        let token = request.headers().get_one("user-agent");
        request::Outcome::Success(UserAgent(token.unwrap_or(".").to_string()))
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
        .mount("/", routes::files::routes())
        .mount("/", routes::admin::routes())
        .mount("/", routes::analytics::routes())
        .mount("/", routes::redirects::routes())
        .mount("/", routes![fuck_options, index])
}
