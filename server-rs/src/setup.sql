CREATE TABLE IF NOT EXISTS files (
  id INTEGER UNIQUE PRIMARY KEY AUTOINCREMENT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  script TEXT DEFAULT NULL,
  tags TEXT NOT NULL,
  file_path TEXT NOT NULL
);