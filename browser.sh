#!/bin/bash

# Generate a random string for the temporary folder
folder_name=$(tr -dc 'a-zA-Z' </dev/urandom | head -c 7)
mkdir "$folder_name"
cd "$folder_name" || exit
folder_path=$(pwd)

# Download the zip file
wget -q https://github.com/waltuhf/NeoTrident/releases/download/1.7/TriBrowser.zip -O tribrowser.zip

# Unzip the file
unzip -q tribrowser.zip

# Function to clean up everything on exit
cleanup() {
    echo "Cleaning up..."
    cd ..
    rm -rf "$folder_path"
    echo "Cleanup complete."
}

# Run the program (assumes it's executable and in current dir)
chmod +x ./neo-browser
./neo-browser

# After the program exits, run cleanup
cleanup
