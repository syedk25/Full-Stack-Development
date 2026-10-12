"""
Contribution Tracker - A simple script to log daily coding activity.
Created to ensure GitHub contribution graph stays green.
"""

from datetime import datetime
import json
import os


def log_activity(activity_type: str, description: str) -> dict:
    """Log a coding activity with timestamp."""
    entry = {
        "timestamp": datetime.now().isoformat(),
        "activity_type": activity_type,
        "description": description,
    }
    return entry


def save_log(entry: dict, filepath: str = "activity_log.json") -> None:
    """Save activity log entry to a JSON file."""
    logs = []
    if os.path.exists(filepath):
        with open(filepath, "r") as f:
            try:
                logs = json.load(f)
            except json.JSONDecodeError:
                logs = []
    logs.append(entry)
    with open(filepath, "w") as f:
        json.dump(logs, f, indent=2)


if __name__ == "__main__":
    entry = log_activity("code_commit", "Fixed git config and pushed to GitHub")
    save_log(entry)
    print(f"Activity logged: {entry['description']}")
