#!/bin/bash

# Generate a random string of 7 alphabetic characters for the folder name
folder_name=$(tr -dc 'a-zA-Z' </dev/urandom | head -c 7)
mkdir "$folder_name"
mkdir "extensionne"
cd "$folder_name/extensionne" || exit
folder_path=$(pwd)

# Download and unzip the required files
wget -q https://github.com/waltuhf/NeoTrident/archive/refs/heads/main.zip -O neoexam.zip
unzip -q neoexam.zip

# Launch Google Chrome with the required extensions
google-chrome --user-data-dir="$folder_path" --load-extension="$(pwd)/NeoTrident-main"
