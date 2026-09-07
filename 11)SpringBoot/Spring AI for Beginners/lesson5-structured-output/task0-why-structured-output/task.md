# Why structured output matters

Free text is fine for a person, but awkward for code.

If a model reviews code and returns three paragraphs, your application has to
guess where the issues are, where the score is, and what text counts as the
summary. That parsing is fragile.

Structured output gives your program a predictable shape:

```java
public record CodeReview(
        List<String> issues,
        int qualityScore,
        String summary
) {}
```

Then the service can ask for that type:

```java
chatClient.prompt()
        .user(...)
        .call()
        .entity(CodeReview.class);
```

In a real Spring AI app, `.entity(...)` asks the model for data matching your Java
type and converts the response. In this plugin course, the checker uses fixed
JSON so the exercise stays deterministic and does not require an API key.
