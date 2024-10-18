export function jsonResponse(json: object, init?: ResponseInit) {
  return new Response(JSON.stringify(json), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
}

export function response404() {
  return jsonResponse({ message: "Not Found" }, { status: 404 });
}

export function errorMessage(error: string) {
  return jsonResponse({ message: error }, { status: 400 });
}

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
};
