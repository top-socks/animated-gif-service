#!/bin/sh

cd $( dirname "$0" )/..

port=${1:-49160}

# Stop the container, don't wait to kill it
docker stop --time 0 animated-gif-service > /dev/null 2>&1

# Remove the container
docker rm animated-gif-service > /dev/null 2>&1

echo "Running. To stop:\ndocker stop --time 0 animated-gif-service"

# Run the container
container=$( docker run --name animated-gif-service \
  -p $port:8000 \
  --detach \
  --env-file ./.env \
  animated-gif-service )

open http://localhost:$port/

docker logs --follow $container
