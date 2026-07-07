# 🚀 GitHub Contribution Tracker Folder

This script is your Personal Git Assistant. It acts like a smart timer running in the background while you work, turning your normal code cleaning and formatting tasks into regular GitHub contributions without you needing to remember any Git commands.

This folder contains your automated background Git assistant. It isolates the tracking script from your core application files to keep your root directory clean.

---

## 📂 Current Folder Structure

```text
📁 Your-Project-Root/
   ├── 📁 git-tracker/            <-- You are here
   │     ├── 📄 hourly-git.ps1
   │     └── 📄 README.md
   └── 📁 (Your actual app files and code...)
```

---

## ⚡ Daily Launch Command

Every morning, open your main project terminal in VS Code and run this single command line to kick off your tracking session:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass; ./git-tracker/hourly-git.ps1
```

_(Note: Run this from the **root project folder**, not from inside the git-tracker folder itself)._

---

## 🛠️ Modifying the Settings

To adjust the timer or target checks, open `hourly-git.ps1` and change the values at the very top:

- `$TotalHours = 5` — Total popup checks per day.
- `$WaitMinutes = 120` — Gap between checks (e.g., `120` = 2 hours).

---

## 🛑 Safe Early Exit

- Click the VS Code terminal and press **`Ctrl` + `C`**.
- A popup window will automatically query: _"Do you want to push your commits to GitHub?"_
- Select **Yes** to secure your daily contribution points instantly, or **No** to exit silently.
