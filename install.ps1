# Generate a random string of 7 alphabetic characters for the folder name
$folderName = -join ((65..90) + (97..122) | Get-Random -Count 7 | ForEach-Object {[char]$_})
New-Item -ItemType Directory -Path $folderName | Out-Null
Set-Location -Path $folderName
$folderPath = (Get-Location).Path
New-Item -ItemType Directory -Path "extensionne" | Out-Null
Set-Location -Path "extensionne"

# Download and unzip the required files
Invoke-WebRequest -Uri "https://github.com/waltuhf/NeoTrident/archive/refs/heads/main.zip" -OutFile  "neoexam.zip"
Expand-Archive -Path "neoexam.zip" -DestinationPath .
Remove-Item -Path "neoexam.zip"

# Additional downloads
Invoke-WebRequest -Uri "https://github.com/jswanner/DontF-WithPaste/archive/refs/heads/master.zip" -OutFile "paste.zip"
Expand-Archive -Path "paste.zip" -DestinationPath .
Remove-Item -Path "paste.zip"

Invoke-WebRequest -Uri "https://github.com/brian-girko/always-active/archive/refs/heads/master.zip" -OutFile "window.zip"
Expand-Archive -Path "window.zip" -DestinationPath .
Remove-Item -Path "window.zip"

# Function to clean up the user data directory
function Cleanup {
    Write-Host "Cleaning up..."

    Start-Sleep -Seconds 2 # Delay to allow processes to fully exit

    # Move out of the directory to avoid locking issues
    Set-Location -Path "$env:USERPROFILE"
    
    Remove-Item -Path $folderPath -Recurse -Force
    Write-Host "User data directory deleted."
}

# Launch Google Chrome with the required extensions in the background
$chromeProcess = Start-Process -FilePath "chrome.exe" `
    -ArgumentList "--user-data-dir=$folderPath", "--load-extension=$($folderPath)\extensionne\NeoTrident-main,$($folderPath)\extensionne\DontF-WithPaste-master,$($folderPath)\extensionne\always-active-master\v3", "--no-first-run" `
    -PassThru

# Wait for Chrome to close
$chromeProcess.WaitForExit()

# Run cleanup after Chrome closes
Cleanup
