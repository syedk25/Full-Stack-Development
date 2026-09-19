# Move the AI call into a service

Controllers should handle HTTP. The AI call itself belongs in a service.

Complete `AiService.chat(...)` so it sends the user's message to the `ChatClient`
and returns the model's text response:

```java
return chatClient.prompt()
        .user(message)
        .call()
        .content();
```

The checker uses a fake model and confirms two things: your service returns the
model reply, and the prompt contains the user's message.

<div class="hint" title="Hint">

    This is the same `ChatClient` chain from the previous lesson, now moved into
    `AiService`.
</div>
