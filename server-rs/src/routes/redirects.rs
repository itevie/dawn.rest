use rocket::{http::Status, response::Redirect};

static REDIRECTS: [(&'static str, &'static str); 3] = [
    ("discord", "https://discord.gg/xrjcHcAsj2"),
    ("youtube", "https://youtube.com/@trancebydawn"),
    ("yt", "https://youtube.com/@trancebydawn"),
];

#[get("/redirect/<path>")]
pub fn redirect_to(path: &str) -> Result<Redirect, Status> {
    for &(key, target) in &REDIRECTS {
        if key == path {
            return Ok(Redirect::to(target));
        }
    }
    Err(Status::NotFound)
}

#[get("/r/<path>")]
pub fn redirect_to_short(path: &str) -> Result<Redirect, Status> {
    for &(key, target) in &REDIRECTS {
        if key == path {
            return Ok(Redirect::to(target));
        }
    }
    Err(Status::NotFound)
}

pub fn routes() -> Vec<rocket::Route> {
    routes![redirect_to, redirect_to_short]
}
