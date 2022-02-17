#!/bin/bash
cd ./.scripts/

# GOOGLE_APPLICATION_CREDENTIALS=./token.json node . --force-create-folder
GOOGLE_APPLICATION_CREDENTIALS=./token.json npm run upload
