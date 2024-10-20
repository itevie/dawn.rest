use std::path::PathBuf;

use rocket::{fs::NamedFile, http::Status, response::status, serde::json::Json, State};
use sqlx::{Pool, Sqlite};

use crate::database::DawnFile;

#[get("/api/file-list")]
async fn file_list(db: &State<Pool<Sqlite>>) -> Json<Vec<DawnFile>> {
    let rows = sqlx::query_as::<_, DawnFile>("SELECT * FROM files;")
        .fetch_all(db.inner())
        .await
        .unwrap();

    Json(rows)
}

#[derive(rocket::Responder)]
enum GetFileResponses {
    File(Json<DawnFile>),
    Audio(NamedFile),
}

#[get("/api/files/<path..>")]
async fn get_file(
    db: &State<Pool<Sqlite>>,
    path: PathBuf,
) -> status::Custom<Option<GetFileResponses>> {
    let url = path.display().to_string();

    // Get the ID from the path
    let parts = url.split("-").collect::<Vec<&str>>();
    if parts.len() == 0 {
        return status::Custom(Status::NotFound, None);
    }

    // Try parse the ID
    let id = {
        let test = parts[0].parse::<u16>();
        match test {
            Err(_) => return status::Custom(Status::NotFound, None),
            Ok(result) => result,
        }
    };

    // Fetch file
    let file = match sqlx::query_as::<_, DawnFile>("SELECT * FROM files WHERE id = ?1;")
        .bind(id)
        .fetch_one(db.inner())
        .await
    {
        Ok(result) => result,
        Err(_) => return status::Custom(Status::NotFound, None),
    };

    // Check if user wants the audio
    if path.display().to_string().ends_with(".mp3") {
        let path = std::env::current_dir()
            .unwrap()
            .join(format!("./files/{}", file.file_path));
        if !path.is_file() {
            status::Custom(Status::InternalServerError, "Failed to locate file's audio");
        }
        return status::Custom(
            Status::Ok,
            Some(GetFileResponses::Audio(
                NamedFile::open(path).await.unwrap(),
            )),
        );
    }

    status::Custom(Status::Ok, Some(GetFileResponses::File(Json(file))))
}

pub fn routes() -> Vec<rocket::Route> {
    routes![file_list, get_file]
}
