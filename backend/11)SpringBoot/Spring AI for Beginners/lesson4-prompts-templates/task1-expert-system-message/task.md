# Add a system message

System messages set the model's role and behavior. Add `chatAsExpert(...)` so it
uses a system message before the user's question.

Use this system instruction:

```text
You are a concise Spring AI expert. Give practical Java answers.
```

Then send the user's `message` and return `.content()`.

The checker captures the prompt and verifies both messages are present: one system
message with the expert instruction, and one user message with the question.

<div class="hint" title="Hint">

    Start with `chatClient.prompt()`, then call `.system(...)`, then `.user(message)`,
    then `.call().content()`.
</div>
