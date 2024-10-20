use rocket::{http::Status, response::status, serde::json::Json, State};
use serde::Deserialize;
use sqlx::{Pool, Sqlite};
use uuid::Uuid;

use crate::{database::DawnFile, util::write_file_from_data_url};

#[derive(Debug, PartialEq, Eq, Deserialize)]
pub struct UploadFileData {
    title: String,
    description: String,
    tags: Vec<String>,
    script: String,
    file: Option<String>,
    auth: String,
    duration: u32,
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
) -> status::Custom<FileUploadResponses> {
    if file_options.0.auth != admin_key.to_string() {
        return status::Custom(
            Status::Forbidden,
            FileUploadResponses::String("Missing auth".to_string()),
        );
    }

    if let Some(ref file_data) = file_options.0.file {
        let file_name = format!(
            "{}.mp3",
            file_options.title.replace(" ", "-").to_lowercase()
        );

        let result = sqlx::query_as::<_, DawnFile>("INSERT INTO files (title, description, script, tags, file_path, audio_length) VALUES (?1, ?2, ?3, ?4, ?5, ?6) RETURNING *;")
        .bind(file_options.0.title)
        .bind(file_options.0.description)
        .bind(file_options.0.script)
        .bind(file_options.0.tags.join(","))
        .bind(file_name.clone())
        .bind(file_options.0.duration)
        .fetch_one(db.inner()).await.unwrap();

        write_file_from_data_url(
            &file_data,
            std::env::current_dir()
                .unwrap()
                .join(format!("./files/{}", file_name)),
        )
        .unwrap();

        return status::Custom(Status::Ok, FileUploadResponses::Json(Json(result)));
    }

    status::Custom(
        Status::Ok,
        FileUploadResponses::String(String::from("OK to upload file")),
    )
}

#[derive(Debug, PartialEq, Eq, Deserialize)]
pub struct EditFileOptions {
    title: String,
    description: String,
    tags: Vec<String>,
    script: String,
    auth: String,
}

#[patch("/api/admin/edit-file/<id>", format = "json", data = "<file_options>")]
pub async fn edit_file(
    db: &State<Pool<Sqlite>>,
    id: u8,
    admin_key: &State<Uuid>,
    file_options: Json<EditFileOptions>,
) -> status::Custom<Option<Json<DawnFile>>> {
    if file_options.0.auth != admin_key.to_string() {
        return status::Custom(Status::Forbidden, None);
    }

    let result = sqlx::query_as::<_, DawnFile>("UPDATE files SET title = ?2, description = ?3, tags = ?4, script = ?5 WHERE id = ?1 RETURNING *")
      .bind(id)
      .bind(file_options.0.title)
      .bind(file_options.0.description)
      .bind(file_options.0.tags.join(","))
      .bind(file_options.0.script)
      .fetch_one(db.inner())
      .await;

    match result {
        Err(_) => status::Custom(Status::InternalServerError, None),
        Ok(ok) => status::Custom(Status::Ok, Some(Json(ok))),
    }
}

pub fn routes() -> Vec<rocket::Route> {
    routes![upload_file, edit_file]
}
