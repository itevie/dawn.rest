use rocket::{fs::NamedFile, http::Status, response::{status, Redirect}};

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

#[get("/cdn/<path>")]
pub async fn get_cdn_file(path: &str) -> status::Custom<Option<NamedFile>> {
  let path = std::env::current_dir().unwrap().join("./cdn").join(path);

  if !path.exists() {
    return status::Custom(Status::NotFound, None);
  }

  status::Custom(Status::Ok, Some(NamedFile::open(path).await.unwrap()))
}

pub fn routes() -> Vec<rocket::Route> {
    routes![redirect_to, redirect_to_short, get_cdn_file]
}
