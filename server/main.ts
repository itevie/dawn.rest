import { join } from "jsr:@std/path@^1.0.6/join";
import { walk } from "jsr:@std/fs";
import { serveFile } from "jsr:@std/http/file-server";
import routes from "./metaTags.ts";
import crawlers from "./crawlers.json" with { type: "json" };
import adminPost from "./admin.ts";
import { corsHeaders, errorMessage, jsonResponse } from "./util.ts";
import { getFileById, getFileList, init } from "./database/database.ts";

const staticFileWalker = walk(import.meta.dirname + "/../build");
const staticFiles: [string, string][] = [];
for await (const thing of staticFileWalker) {
  staticFiles.push([
    thing.path,
    thing.path.replace(join(import.meta.dirname as string, "../build"), ""),
  ]);
}

await init();

Deno.serve({ port: 3001 }, async (req) => {
  const url = new URL(req.url);
  console.log(
    `[${new Date().toLocaleTimeString()} - ${req.method}]: ${url.href}`,
  );

  // Check non-get
  if (req.method === "POST") {
    if (url.pathname.startsWith("/admin")) {
      return await adminPost(req);
    }
  } else if (req.method === "OPTIONS") {
    return new Response("", {
      headers: corsHeaders,
    });
  } else if (req.method !== "GET") {
    return jsonResponse({
      message: "Expected GET method",
    }, { status: 400 });
  }

  // Check for /trancer-proxy
  if (url.pathname.startsWith("/trancer-proxy")) {
    if (!url.searchParams.get("url")) {
      return new Response(
        JSON.stringify({ message: "Missing URL search parameter" }),
        { headers: { "Content-Type": "application/json" } },
      );
    }

    const result = await fetch(
      `http://localhost:8080${url.searchParams.get("url")}`,
      {
        headers: {
          Authorization: req.headers.get("authorization") || "",
        },
      },
    );

    try {
      const json = await result.json();

      return new Response(JSON.stringify(json), {
        status: result.ok ? 200 : 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (_) {
      return new Response(JSON.stringify({ message: "Failed to parse JSON" }), {
        headers: { "Content-Type": "application/json" },
      });
    }
  } else if (url.pathname === "/file-list") {
    return jsonResponse({ files: await getFileList() });
  } else if (url.pathname.match(/^(\/files\/[0-9]+)/)) {
    const id = parseInt(url.pathname.match(/[0-9]+/)?.[0] as string);
    const file = await getFileById(id);
    if (!file) return errorMessage("Unknown file ID");

    // Check if they want the .mp3
    if (url.pathname.endsWith(".mp3")) {
      return serveFile(
        req,
        join(import.meta.dirname as string, "/database/files/", file.file_path),
      );
    }

    return jsonResponse(file);
  }

  // Check if it is a file in the static folder
  if (staticFiles.map((x) => x[1]).includes(url.pathname)) {
    return serveFile(
      req,
      staticFiles[staticFiles.findIndex((x) => x[1] === url.pathname)][0],
    );
  }

  // Check for crawlers
  const ua = req.headers.get("user-agent") ?? "ruh roh shaggy";
  if (crawlers.find((x) => ua.includes(x.pattern))) {
    for (const route of routes) {
      if (route.path.exec(url.pathname)) {
        return new Response(
          `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:title" content="${route.title}" />
  <meta property="og:description" content="${route.description}" />
  <meta name="theme-color" content="#7647ad" />
  <title>${route.title}</title>
</head>
</html>`,
          {
            headers: { "Content-Type": "text/html" },
          },
        );
      }
    }
  }

  // Else, just send the index.html file
  return serveFile(
    req,
    join(import.meta.dirname as string, "../build/index.html"),
  );
});
