# The ChatClient: one door to any model

Spring AI gives you one consistent object for talking to a chat model:
`ChatClient`.

The important idea is not the provider. The important idea is the shape of the
code:

```java
chatClient.prompt()
        .user(message)
        .call()
        .content();
```

Read that chain from top to bottom:

1. Start a new prompt.
2. Add the user's message.
3. Call the model.
4. Return the model's text reply.

In a real application, Spring creates the `ChatClient.Builder` from your AI
provider configuration. In these exercises, the checker uses a fake model so you
can practice the code without an API key or network call.

No code to write here. Hit **Check** to continue.
