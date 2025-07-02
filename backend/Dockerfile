
FROM node:22.17-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci
FROM node:22.17-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package*.json ./

COPY prisma ./prisma
COPY tsconfig*.json nest-cli.json ./
COPY src ./src

RUN npx prisma generate
RUN npm run build


FROM node:22.17-alpine

WORKDIR /app
EXPOSE 3000

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

CMD ["node", "dist/main.js"]
