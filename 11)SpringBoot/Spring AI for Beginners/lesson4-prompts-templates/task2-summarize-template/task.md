# Use a prompt template

Prompt templates keep the instruction stable while the input changes.

Implement `summarize(String text)` with this template:

```java
return chatClient.prompt()
        .user(u -> u.text("""
                Summarize the following text in one sentence:

                {input}
                """)
                .param("input", text))
        .call()
        .content();
```

The checker verifies the rendered prompt contains the instruction and the actual
input text, with no `{input}` placeholder left behind.

<div class="hint" title="Hint">

    Use `.user(u -> u.text("""...{input}...""").param("input", text))`. The
    placeholder name and the `.param(...)` name must match.
</div>
