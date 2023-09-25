#!/bin/bash

docker-compose down -v
docker rm --force python-api-server react-client && docker rmi --force hack_wooclap_web-server hack_wooclap_web-client
docker-compose up --build -d