use rocket::serde::Serialize;
use sqlx::FromRow;

#[derive(FromRow, Serialize, Debug)]
pub struct DawnFile {
    pub id: u16,
    pub title: String,
    pub description: String,
    pub tags: String,
    pub script: String,
    pub audio_length: u32,
    pub uploaded_at: String,
    #[serde(skip_serializing)]
    pub file_path: String,
}
