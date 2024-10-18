import sqlite3, { Statement } from "sqlite3";
import { Database, open } from "sqlite";
import { join } from "jsr:@std/path@^1.0.6/join";

export let connection: Database<sqlite3.Database, Statement>;

export async function init() {
  connection = await open({
    filename: join(import.meta.dirname as string, "/db.sql"),
    driver: sqlite3.Database,
  });

  await connection.exec(
    await Deno.readTextFile(join(import.meta.dirname as string, "/setup.sql")),
  );
}

export interface UploadOptions {
  title: string;
  description: string;
  script: string;
  tags: string[];
  fileName: string;
}

export async function uploadFile(options: UploadOptions): Promise<DawnFile> {
  return await connection.get<DawnFile>(
    "INSERT INTO files (title, description, script, tags, file_path) VALUES (?, ?, ?, ?, ?) RETURNING *;",
    options.title,
    options.description,
    options.script,
    options.tags.join(","),
    options.fileName,
  ) as DawnFile;
}

export async function getFileList(): Promise<DawnFile[]> {
  return await connection.all<DawnFile[]>("SELECT * FROM files;");
}

export async function getFileById(id: number): Promise<DawnFile | undefined> {
  return await connection.get<DawnFile>(
    "SELECT * FROM files WHERE id = ?;",
    id,
  );
}
