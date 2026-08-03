ARG NODE_VERSION=24-alpine
FROM node:${NODE_VERSION} AS base

ARG PNPM_VERSION=10.15.0

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV=production

RUN npm install --global corepack@latest && \
    corepack enable && \
    corepack prepare pnpm@${PNPM_VERSION} --activate

WORKDIR /app

FROM base AS build

COPY . .

RUN pnpm install --frozen-lockfile && \
    pnpm build

FROM base AS server

COPY --chown=node:node --from=build /app/.output .output

USER node

ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
