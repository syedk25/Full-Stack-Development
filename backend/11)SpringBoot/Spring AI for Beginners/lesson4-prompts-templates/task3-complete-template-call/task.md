# Complete the template call

This method already has the structure of a reusable prompt. Fill in the missing
template placeholder and `.param(...)` call.

The finished prompt should ask the model to rewrite text for a beginner:

```java
return chatClient.prompt()
        .user(u -> u.text("""
                Rewrite this for a beginner Java developer:

                {input}
                """)
                .param("input", text))
        .call()
        .content();
```

The checker confirms your rendered prompt includes the learner-friendly
instruction and the actual text passed to the method.

<div class="hint" title="Hint">

    Fill the template placeholder with `{input}`, then bind it with
    `.param("input", text)` after the text block.
</div>
