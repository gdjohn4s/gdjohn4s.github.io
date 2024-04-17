#!/bin/bash

npm run build
cd ./dist/
python3 -m http.server
