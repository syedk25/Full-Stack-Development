# Observe the first AI-style reply

In a production app, this is where your code would call a real model. In this
standalone plugin course, the checker uses a fake model so the task is repeatable
and does not require an API key.

The important flow is the same:

```java
chatClient.prompt()
        .user(message)
        .call()
        .content();
```

The message you practiced sending was:

```text
Say hello in one sentence
```

The fake model returned a fixed reply, and the checker verified that your prompt
contained the user's message. With a real provider configured, the same call
shape returns an actual model-generated sentence.

No extra setup is required here. Hit **Check** to continue.
