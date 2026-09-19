# Make your first AI call

Complete `AiController` so it sends a message to the `ChatClient` and returns the
model's text response.

You need two fixes:

1. In the constructor, build the `ChatClient` from the provided builder.
2. In `chat(...)`, complete the fluent call chain:

```java
return chatClient.prompt()
        .user(message)
        .call()
        .content();
```

The checker uses a fake model that always returns the same reply. It verifies your
method returns that reply and that the prompt contains the user's message.

<div class="hint" title="Hint 1">

    The constructor should assign `this.chatClient` by calling `builder.build()`.
</div>

<div class="hint" title="Hint 2">

    The `chat(...)` method should return the result of the whole fluent chain. Do not
    store or create a model yourself.
</div>
