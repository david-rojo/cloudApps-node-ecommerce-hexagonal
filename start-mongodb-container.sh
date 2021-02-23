#!/bin/sh

docker run --rm -p 27017:27017 -d --name mongodb-ecommerce mongo:4.4.2-bionic