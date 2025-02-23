use rocket::{http::Status, State};
use sqlx::{Pool, Sqlite};

#[post("/api/files/<id>/views")]
pub async fn add_file_view(db: &State<Pool<Sqlite>>, id: u8) -> Status {
    match sqlx::query("UPDATE files SET views = views + 1 WHERE id = ?1;")
        .bind(id)
        .execute(db.inner())
        .await
    {
        Ok(_) => Status::Ok,
        Err(_) => Status::InternalServerError,
    }
}

pub fn routes() -> Vec<rocket::Route> {
    routes![add_file_view]
}
