import { createCsrfMiddleware, createStart } from "@tanstack/react-start";

import { agentMiddleware } from "#/middlewares/agent";

const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn"
});

export const startInstance = createStart(() => ({
  requestMiddleware: [agentMiddleware, csrfMiddleware]
}));
