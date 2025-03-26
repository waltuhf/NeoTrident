#!/bin/bash

# Generate a random folder name
folder_name=$(tr -dc 'a-zA-Z' </dev/urandom | head -c 7)
mkdir "$folder_name"
cd "$folder_name" || exit
folder_path=$(pwd)

# Download the zip
wget -q https://github.com/waltuhf/NeoTrident/releases/download/1.7/TriBrowser.zip -O tribrowser.zip

# Unzip the file
unzip -q tribrowser.zip

# Enter the extracted folder (assumes only one folder is extracted)
extracted_dir=$(find . -maxdepth 1 -type d ! -name '.' | head -n 1)
cd "$extracted_dir" || exit

# Function to clean up after exit
cleanup() {
    echo "Cleaning up..."
    cd ../.. || exit
    rm -rf "$folder_path"
    echo "Done."
}

# Make sure neo-browser is executable, then run it
chmod +x ./neo-browser
./neo-browser

# Run cleanup after the program exits
cleanup
