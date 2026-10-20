FROM --platform=$BUILDPLATFORM node:26-alpine AS base

ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=${PNPM_HOME}/bin:${PATH}

RUN apk add --no-cache bash wget \
    && wget -qO- https://get.pnpm.io/install.sh \
    | env ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -

WORKDIR /app

ENV CI=true \
    HUSKY=0

FROM base AS builder

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY . ./

RUN pnpm install --frozen-lockfile \
    && pnpm build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN chown -R node:node /app

COPY --from=builder /app/.output ./.output

EXPOSE 3000

USER node

CMD ["node", ".output/server/index.mjs"]
