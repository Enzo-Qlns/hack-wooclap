#!/bin/bash

#cd client && npm run build && cd ..

docker rm --force server_hack_wooclap nginx_hack_wooclap && docker rmi --force nginx:1.15 apptaskme_server
docker-compose -f docker-compose.yml up -d