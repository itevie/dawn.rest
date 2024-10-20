use rocket::{fs::NamedFile, http::Status, response::status, serde::json::Json, State};
use sqlx::{Pool, Sqlite};

use crate::{database::DawnFile, ReturnOptions};

#[get("/api/file-list")]
async fn file_list(db: &State<Pool<Sqlite>>) -> Json<Vec<DawnFile>> {
    let rows = sqlx::query_as::<_, DawnFile>("SELECT * FROM files;")
        .fetch_all(db.inner())
        .await
        .unwrap();

    Json(rows)
}

#[get("/api/files/<id>")]
async fn get_file(db: &State<Pool<Sqlite>>, id: u8) -> status::Custom<Option<ReturnOptions>> {
    // Fetch file
    let file = match sqlx::query_as::<_, DawnFile>("SELECT * FROM files WHERE id = ?1;")
        .bind(id)
        .fetch_one(db.inner())
        .await
    {
        Ok(result) => result,
        Err(_) => {
            return status::Custom(
                Status::NotFound,
                Some(ReturnOptions::String("File not fond".to_string())),
            )
        }
    };

    status::Custom(Status::Ok, Some(ReturnOptions::DawnFile(Json(file))))
}

#[get("/api/audios/<id>")]
async fn get_file_audio(db: &State<Pool<Sqlite>>, id: u8) -> status::Custom<Option<NamedFile>> {
    // Fetch file
    let file = match sqlx::query_as::<_, DawnFile>("SELECT * FROM files WHERE id = ?1;")
        .bind(id)
        .fetch_one(db.inner())
        .await
    {
        Ok(result) => result,
        Err(_) => return status::Custom(Status::NotFound, None),
    };

    let path = std::env::current_dir()
        .unwrap()
        .join(format!("./files/{}", file.file_path));

    if !path.is_file() {
        status::Custom(Status::InternalServerError, "Failed to locate file's audio");
    }

    return status::Custom(Status::Ok, Some(NamedFile::open(path).await.unwrap()));
}

pub fn routes() -> Vec<rocket::Route> {
    routes![get_file_audio, file_list, get_file]
}
