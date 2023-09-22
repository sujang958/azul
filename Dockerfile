FROM oven/bun:1.0.3

WORKDIR /ui-bot/

COPY .env bun.lockb package.json tsconfig.json /ui-bot/
COPY ./src/ /ui-bot/src/

RUN bun i

CMD ["bun", "./src/app.ts"]