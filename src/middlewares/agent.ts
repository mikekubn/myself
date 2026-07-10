import { createMiddleware } from "@tanstack/react-start";

export const agentMiddleware = createMiddleware({ type: "request" }).server(async ({ request, pathname, next }) => {
  const acceptHeader = request.headers.get("accept");

  if (acceptHeader?.includes("text/markdown") && !pathname.startsWith("/api/markdown")) {
    const url = new URL("/api/markdown", request.url);

    const headers = new Headers(request.headers);
    headers.set("accept", "*/*");

    const rewriteRequest = new Request(url, {
      method: request.method,
      headers,
      body: request.body ?? undefined
    });

    return await fetch(rewriteRequest);
  }

  return next();
});
