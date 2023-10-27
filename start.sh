#!/bin/bash

sudo docker-compose down -v
sudo docker rm --force python-api-server react-client && docker rmi --force hack_wooclap_web-server hack_wooclap_web-client
sudo docker-compose up --build -d
