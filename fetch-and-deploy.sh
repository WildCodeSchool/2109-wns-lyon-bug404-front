#! /bin/sh
docker-compose -f docker-compose.staging.yml down && \
docker-compose -f docker-compose.staging.yml pull && \
GATEWAY_CLIENT=3001 docker-compose -f docker-compose.staging.yml up -d;