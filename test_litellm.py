"""
Test script to verify LiteLLM local setup.
Run: python test_litellm.py
"""

import requests
import json

BASE_URL = "http://localhost:4000/v1"
API_KEY = "anything"
MODEL = "omniroute"


def test_connection():
    """Test 1: Check if LiteLLM server is running"""
    print("🔄 Testing connection to LiteLLM server...")
    try:
        response = requests.get(f"{BASE_URL}/models", headers={"Authorization": f"Bearer {API_KEY}"}, timeout=5)
        if response.status_code == 200:
            models = response.json()
            print("✅ Server is running!")
            print(f"   Available models: {json.dumps(models, indent=2)}")
            return True
        else:
            print(f"❌ Server returned status {response.status_code}")
            return False
    except requests.ConnectionError:
        print("❌ Cannot connect to server. Is LiteLLM running on port 4000?")
        return False


def test_chat_completion():
    """Test 2: Send a chat completion request"""
    print("\n🔄 Testing chat completion with model '{}'...".format(MODEL))
    payload = {
        "model": MODEL,
        "messages": [
            {"role": "user", "content": "Write a Python function to verify a JWT token. Keep it short."}
        ],
        "max_tokens": 250,
    }
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }
    try:
        response = requests.post(f"{BASE_URL}/chat/completions", headers=headers, json=payload, timeout=30)
        if response.status_code == 200:
            data = response.json()
            content = data["choices"][0]["message"]["content"]
            print("✅ Chat completion works!")
            print(f"\n--- Model Response ---\n{content}\n----------------------")
            return True
        else:
            print(f"❌ Request failed with status {response.status_code}")
            print(f"   Response: {response.text}")
            return False
    except requests.ConnectionError:
        print("❌ Cannot connect to server.")
        return False


if __name__ == "__main__":
    print("=" * 50)
    print("  LiteLLM Local Setup Verification")
    print("=" * 50)

    server_ok = test_connection()
    if server_ok:
        test_chat_completion()

    print("\n" + "=" * 50)
    print("  Done!")
    print("=" * 50)
