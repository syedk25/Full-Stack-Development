# =================================================================
# ⚙️ EASY SETTINGS BLOCK (Change your preferences here)
# =================================================================
$TotalHours  = 5       # Total number of times the script checks your code
$WaitMinutes = 60     # How long to wait between checks (120 = 2 hours)
# =================================================================

# Load Windows popup layouts
Add-Type -AssemblyName Microsoft.VisualBasic
Add-Type -AssemblyName System.Windows.Forms

# Go up one level to the root project folder so we track your actual app code
Push-Location "$PSScriptRoot\.."

$script:commitCount = 0

function Invoke-FinalPush {
    if ($script:commitCount -gt 0) {
        $title   = "Exit Request Detected"
        $msg     = "You made $script:commitCount commit(s) so far today.`n`nDo you want to push them to GitHub before exiting?"
        $buttons = [System.Windows.Forms.MessageBoxButtons]::YesNo
        $icon    = [System.Windows.Forms.MessageBoxIcon]::Question
        
        $result = [System.Windows.Forms.MessageBox]::Show($msg, $title, $buttons, $icon)
        
        if ($result -eq "Yes") {
            Write-Host "`n[GIT] Uploading your $script:commitCount commit(s) to GitHub..." -ForegroundColor Green
            git push origin main
        } else {
            Write-Host "`n[GIT] Push canceled. Your commits remain safe on your local computer." -ForegroundColor Yellow
        }
    } else {
        Write-Host "`n[INFO] Exiting script. No commits were made today." -ForegroundColor Red
    }
    Pop-Location # Return to original folder location safely
}

# Catch 'Ctrl + C' command inside terminal
[Management.Automation.Internal.Host.ControlCHandler]$action = {
    Write-Host "`n[ALERT] Ctrl+C detected! Safely stopping..." -ForegroundColor Magenta
    Invoke-FinalPush
    Exit
}
$Host.UI.RawUI.add_ControlCHandler($action)

try {
    $WaitSeconds = $WaitMinutes * 60

    for ($i = 1; $i -le $TotalHours; $i++) {
        # Scan root folder for updates (ignoring the git-tracker folder changes)
        $status = git status --porcelain
        
        if (![string]::IsNullOrEmpty($status)) {
            $promptMsg = "Changes detected in check $i/$TotalHours. Enter your commit message:"
            $msg = [Microsoft.VisualBasic.Interaction]::InputBox($promptMsg, "Hourly Git Tracker", "refactor: code maintenance updates")
            
            if ([string]::IsNullOrEmpty($msg)) { 
                $msg = "refactor: automated code formatting and updates" 
            }
            
            # Stage everything from the root project and commit
            git add .
            git commit -m "$msg"
            $script:commitCount++
            Write-Host "[SUCCESS] Saved commit #$script:commitCount: $msg" -ForegroundColor Green
        } else {
            Write-Host "[INFO] Check ${i}: No code updates found." -ForegroundColor Yellow

        }
        
        if ($i -lt $TotalHours) { 
            Write-Host "Waiting $WaitMinutes minutes before checking code... (Ctrl+C to exit)" -ForegroundColor Cyan
            Start-Sleep -Seconds $WaitSeconds 
        }
    }

    Write-Host "`nAll hours finished successfully!" -ForegroundColor Green
    Trigger-FinalPush

} finally {
    $Host.UI.RawUI.remove_ControlCHandler($action)
}
