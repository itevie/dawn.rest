use reqwest::Client;
use rocket::{http::Status, response::content::RawJson};

#[get("/data/<data_type>")]
pub async fn get_from_trancer(data_type: &str) -> Result<RawJson<String>, Status> {
    let client = Client::new();
    let url = format!("http://localhost:8080/data/{}", data_type);

    let response = client
        .get(&url)
        .send()
        .await
        .map_err(|_| Status::InternalServerError)?;

    let json = response
        .text()
        .await
        .map_err(|_| Status::InternalServerError)?;

    Ok(RawJson(json))
}

pub fn routes() -> Vec<rocket::Route> {
    routes![get_from_trancer]
}
