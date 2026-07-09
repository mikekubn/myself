FROM --platform=$BUILDPLATFORM node:22-alpine AS builder

WORKDIR /app
ENV CI=true

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
# COPY /app/node_modules ./node_modules
COPY . ./

RUN pnpm install --frozen-lockfile \
    && pnpm build

FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN mkdir -p /app/data && \
    chown -R node:node /app/data

COPY --from=builder /app/.output ./.output

EXPOSE 3000

USER node

CMD ["node", ".output/server/index.mjs"]