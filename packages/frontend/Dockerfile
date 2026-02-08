FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@10.28.2

# Copy all workspace manifests so pnpm can resolve the full dependency graph
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY packages/backend/package.json ./packages/backend/
COPY packages/frontend/package.json ./packages/frontend/
COPY packages/shared/package.json ./packages/shared/

RUN pnpm install --frozen-lockfile

COPY packages/frontend ./packages/frontend
COPY packages/shared ./packages/shared

ARG VITE_API_URL=http://localhost:3001
ENV VITE_API_URL=$VITE_API_URL

# Build using pnpm workspace filter
RUN pnpm --filter @portfolio/frontend run build

FROM nginx:alpine

COPY --from=builder /app/packages/frontend/dist /usr/share/nginx/html

COPY packages/frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
