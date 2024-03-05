#!/bin/bash

docker-compose down
#docker rmi --force nginx-hack-wooclap:latest server-hack-wooclap:latest

docker-compose up --build -d
