import { createMiddleware } from "@tanstack/react-start";

export const agentMiddleware = createMiddleware({ type: "request" }).server(async ({ request, pathname, next }) => {
  const acceptHeader = request.headers.get("accept");

  if (acceptHeader?.includes("text/markdown") && !pathname.startsWith("/api/markdown")) {
    const url = new URL(request.url);
    const rewriteUrl = new URL(`/api/markdown${pathname}${url.search}`, url.origin);

    const headers = new Headers(request.headers);
    headers.set("accept", "*/*");

    const rewriteRequest = new Request(rewriteUrl, {
      method: request.method,
      headers,
      body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body
    });

    return await fetch(rewriteRequest);
  }

  return next();
});
