import { createCsrfMiddleware, createMiddleware, createStart } from "@tanstack/react-start";
import { setResponseHeader } from "@tanstack/react-start/server";

const cspMiddleware = createMiddleware().server(({ next }) => {
  const nonce = crypto.randomUUID();

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}'`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' https://cdn.mikekubn.cz data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'self'",
    "form-action 'self'"
  ].join("; ");

  setResponseHeader("Content-Security-Policy-Report-Only", csp);

  return next({
    context: { nonce }
  });
});

const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn"
});

export const startInstance = createStart(() => ({
  requestMiddleware: [cspMiddleware, csrfMiddleware]
}));
