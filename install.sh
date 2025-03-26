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

# Function to clean up the user data directory
cleanup() {
    echo "Cleaning up..."
    rm -rf "$folder_path"
    echo "User data directory deleted."
}

# Launch Google Chrome with the required extensions
google-chrome --user-data-dir="$folder_path" --load-extension="$(pwd)/NeoTrident-main"

chrome_pid=$!

# Wait for Chrome to close
wait $chrome_pid

# Run cleanup after Chrome closes
cleanup
