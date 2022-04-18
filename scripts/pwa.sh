#!/bin/bash

SOURCE_FILE=$(cd $(dirname $1) && pwd)/$(basename $1)
DIRECTORIES=(${SOURCE_FILE//\// })
THEME_NAME=${DIRECTORIES[6]}
OUTPUT_PATH=$(pwd)/../public/${THEME_NAME}

echo "---------------------------------------------------------------------------"
echo "Generating favicon things"
echo "Theme name: ${THEME_NAME}"
echo "Source file: ${SOURCE_FILE}"
echo "Manifest file: ${MANIFEST_FILE}"
echo "Output path: ${OUTPUT_PATH}"
echo "---------------------------------------------------------------------------"

cd ../
SOURCE_FILE=$SOURCE_FILE OUTPUT_PATH=$OUTPUT_PATH npm run pwa
