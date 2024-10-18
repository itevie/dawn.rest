import { join } from "jsr:@std/path@^1.0.6/join";
import { errorMessage, jsonResponse, response404 } from "./util.ts";
import { decodeBase64 } from "https://deno.land/std@0.206.0/encoding/base64.ts";
import { uploadFile, type UploadOptions } from "./database/database.ts";

let adminKey: string | null = null;

export default async function adminPost(request: Request): Promise<Response> {
  const url = new URL(request.url);

  if (
    !url.searchParams.get("authorization") || adminKey === null ||
    url.searchParams.get("authorization") !== adminKey
  ) {
    adminKey = crypto.randomUUID();
    console.log(`Admin key is: ${adminKey}`);
    return errorMessage("Missing or invalid admin key");
  }

  if (url.pathname.startsWith("/admin/file-upload")) {
    try {
      const json = (await request.json()).body as UploadOptions & {
        file: string;
      };

      // Validate body
      if (!json.title || typeof json.title !== "string") {
        return errorMessage("title in body must be a string");
      }
      if (!json.description || typeof json.description !== "string") {
        return errorMessage("description in body must be a string");
      }
      if (!json.script || typeof json.script !== "string") {
        return errorMessage("script in body must be a string");
      }
      if (!json.file || typeof json.file !== "string") {
        return errorMessage("file in body must be a string");
      }
      if (
        !json.tags || !Array.isArray(json.tags) ||
        (json.tags as unknown[]).find((x) => typeof x !== "string")
      ) {
        return errorMessage("tags in body must be a string[]");
      }

      // Write file to disk
      const base64Data = json.file.split(",")[1];
      const decoded = decodeBase64(base64Data);
      const fileName = `${json.title.toLowerCase().replace(/ /g, "-")}.mp3`;

      const file = await uploadFile({
        title: json.title,
        description: json.description,
        tags: json.tags,
        script: json.script,
        fileName,
      });

      const path = join(
        import.meta.dirname as string,
        "./database/files/",
        fileName,
      );
      await Deno.writeFile(path, decoded);

      return jsonResponse(file, { status: 200 });
    } catch {
      return jsonResponse({
        message: "Failed to parse JSON body",
      }, { status: 400 });
    }
  }

  return response404();
}
