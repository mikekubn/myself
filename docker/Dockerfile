ARG NODE_VERSION=24-alpine3.23
FROM --platform=$BUILDPLATFORM node:${NODE_VERSION} AS builder

WORKDIR /app
ENV CI=true

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
# COPY /app/node_modules ./node_modules
COPY . ./

RUN pnpm install --frozen-lockfile \
    && pnpm build

FROM node:${NODE_VERSION} AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN chown -R node:node /app

COPY --from=builder /app/.output ./.output

EXPOSE 3000

USER node

CMD ["node", ".output/server/index.mjs"]