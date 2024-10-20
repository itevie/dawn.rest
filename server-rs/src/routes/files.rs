use rocket::{http::Status, response::status, serde::json::Json, State};
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

#[get("/api/files/<id>")]
async fn get_file(db: &State<Pool<Sqlite>>, id: u16) -> status::Custom<Option<Json<DawnFile>>> {
    let file = sqlx::query_as::<_, DawnFile>("SELECT * FROM files WHERE id = ?1;")
        .bind(id)
        .fetch_one(db.inner())
        .await;

    if let Ok(file) = file {
        status::Custom(Status::Ok, Some(Json(file)))
    } else {
        status::Custom(Status::NotFound, None)
    }
}

pub fn routes() -> Vec<rocket::Route> {
    routes![file_list, get_file]
}
