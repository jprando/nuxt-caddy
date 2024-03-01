FROM docker.io/library/node:20-alpine as garage-build

WORKDIR /app

COPY ./pnpm-*.yaml .
RUN corepack enable pnpm; pnpm fetch

COPY . .
RUN pnpm install --offline --prefer-frozen-lockfile; pnpm build


FROM docker.io/library/node:20-alpine as garage-runtime

ENV HOST="0.0.0.0" \
    APP="menu" \
    NUXT_PUBLIC_INICIO_URL="http://127.0.0.1:3000/menu/"

COPY --from=garage-build /app /app

WORKDIR /app

EXPOSE 3000

USER node

CMD echo ${APP}; echo ${PUBLIC_URL}; node ${APP}/.output/server/index.mjs