#!/bin/bash

# install dependencies
yarn install

# migrate database
yarn migrate up

#exec main process (in docker-compose service)
exec "$@"
