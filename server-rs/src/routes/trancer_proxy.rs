use reqwest::Client;
use rocket::{
    http::Status,
    request::{FromRequest, Outcome},
    response::content::RawJson,
    Request,
};

// Create a custom guard to extract the token
#[derive(Debug)]
pub struct TokenGuard(String);

#[rocket::async_trait]
impl<'r> FromRequest<'r> for TokenGuard {
    type Error = ();

    async fn from_request(request: &'r Request<'_>) -> Outcome<Self, Self::Error> {
        if let Some(h) = request.headers().get_one("Authorization") {
            Outcome::Success(TokenGuard(h.to_string()))
        } else {
            Outcome::Error((Status::Unauthorized, ()))
        }
    }
}

#[get("/data/<data_type>")]
pub async fn get_from_trancer(
    data_type: &str,
    header: TokenGuard,
) -> Result<RawJson<String>, Status> {
    let client = Client::new();
    let url = format!("http://localhost:8080/data/{}", data_type);

    let response = client
        .get(&url)
        .header("Authorization", header.0)
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
