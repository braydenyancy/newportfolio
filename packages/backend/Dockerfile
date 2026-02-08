FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@10.28.2

# Copy all workspace manifests so pnpm can resolve the full dependency graph
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY packages/backend/package.json ./packages/backend/
COPY packages/frontend/package.json ./packages/frontend/
COPY packages/shared/package.json ./packages/shared/

# Install ALL dependencies (including dev) for building
RUN pnpm install --frozen-lockfile

COPY packages/backend ./packages/backend
COPY packages/shared ./packages/shared

# Build TypeScript
RUN pnpm --filter @portfolio/backend run build

FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm@10.28.2

# Copy all workspace manifests for production install
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY packages/backend/package.json ./packages/backend/
COPY packages/frontend/package.json ./packages/frontend/
COPY packages/shared/package.json ./packages/shared/

WORKDIR /app/packages/backend

# Install ONLY production dependencies
RUN pnpm install --prod --frozen-lockfile

COPY --from=builder /app/packages/backend/dist ./dist
COPY --from=builder /app/packages/backend/drizzle ./drizzle

EXPOSE 3001

CMD ["sh", "-c", "node dist/db/migrate.js && node dist/db/seed.js && node dist/index.js"]
