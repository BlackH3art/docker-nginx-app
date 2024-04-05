FROM node:20-alpine AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY server/package.json ./
COPY server/yarn.lock ./
# COPY server/prisma ./prisma/

# Install app dependencies
RUN yarn install

COPY server/. .

ENV DATABASE_URL "postgresql://admin:password@db:5432/test?schema=public"

RUN npx prisma generate
RUN yarn run build

FROM node:20-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
CMD [ "yarn", "run", "start:migrate:prod" ]
