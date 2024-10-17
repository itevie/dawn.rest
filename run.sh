#!/bin/bash
deno run --allow-read --allow-env --allow-net=0.0.0.0:3000,localhost:8080 ./server/main.ts