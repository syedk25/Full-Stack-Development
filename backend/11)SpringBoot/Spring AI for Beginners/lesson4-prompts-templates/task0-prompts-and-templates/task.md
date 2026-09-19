# Prompts and templates

Calling a model is only half the job. The prompt is the interface between your
application and the model.

There are two message roles you will use here:

- A **system message** sets the model's role and behavior.
- A **user message** contains the actual request or input.

Example:

```java
chatClient.prompt()
        .system("You are a concise Spring AI expert.")
        .user(message)
        .call()
        .content();
```

When part of a prompt changes for every request, use a template:

```java
chatClient.prompt()
        .user(u -> u.text("Summarize this: {input}")
                .param("input", text))
        .call()
        .content();
```

The `{input}` placeholder is replaced before the prompt is sent. In the tasks,
the hidden checker captures the rendered prompt, so you are graded on what your
code sends rather than on unpredictable model wording.
