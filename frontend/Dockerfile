# Build context is the repo root (see docker-compose.yml), so paths are prefixed.

# ---- Stage 1: build the static site ----
FROM node:20-alpine AS build
WORKDIR /app

# Copy manifests first so `npm install` is cached until dependencies change.
# (package-lock.json is optional: it gets committed once generated.)
COPY frontend/package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --no-audit --no-fund; \
    else npm install --no-audit --no-fund; fi

COPY frontend/ ./

# "static" (Phase 1) or "api" (Phase 2+). See decisions/0004.
ARG VITE_DATA_SOURCE=static
ENV VITE_DATA_SOURCE=${VITE_DATA_SOURCE}
RUN npm run build

# ---- Stage 2: serve with nginx ----
FROM nginx:1.27-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1
