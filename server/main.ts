import { join } from "jsr:@std/path@^1.0.6/join";
import { walk } from "jsr:@std/fs";
import { serveFile } from "jsr:@std/http/file-server";
import routes from "./metaTags.ts";
import crawlers from "./crawlers.json" with { type: "json" };

const staticFileWalker = walk(import.meta.dirname + "/../build");
const staticFiles: [string, string][] = [];
for await (const thing of staticFileWalker) {
  staticFiles.push([
    thing.path,
    thing.path.replace(join(import.meta.dirname as string, "../build"), ""),
  ]);
}

Deno.serve({ port: 3000 }, async (req) => {
  const url = new URL(req.url);
  console.log(`[${req.method}]: ${url.pathname}`);

  // Check for /trancer-proxy
  if (url.pathname.startsWith("/trancer-proxy")) {
    console.log(url.searchParams.get("url"));
    const result = await fetch(
      `http://localhost:8000${url.searchParams.get("url")}`,
      {
        headers: {
          Authorization: req.headers.get("authorization") || "",
        },
      },
    );

    console.log(result);

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
