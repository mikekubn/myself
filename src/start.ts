import { createCsrfMiddleware, createStart } from "@tanstack/react-start";

import { markdownAgentMiddleware } from "#/routes/api/markdown/-middleware";

const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn"
});

export const startInstance = createStart(() => ({
  requestMiddleware: [markdownAgentMiddleware, csrfMiddleware]
}));
