# Quick check: template placeholders

Prompt templates use placeholders for the parts that change:

```java
.user(u -> u.text("Summarize this: {input}")
        .param("input", text))
```

What is `{input}`?
