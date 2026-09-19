# Capstone: assemble the AI app

Put the main pieces together.

In `AiService`, implement:

```java
public String chat(String message) {
    return chatClient.prompt()
            .user(message)
            .call()
            .content();
}
```

and:

```java
public CodeReview review(String code) {
    return chatClient.prompt()
            .user(u -> u.text("""
                    You are a Java code reviewer. Review the code below.
                    Identify real bugs and issues, give a quality score from 0 to 100,
                    and a one-sentence summary.

                    Code:
                    {code}
                    """)
                    .param("code", code))
            .call()
            .entity(CodeReview.class);
}
```

In `AiController`, expose:

- `GET /chat?message=...`
- `POST /review`

The checker verifies the service builds the right prompts and the controller
delegates to the service for both endpoints.

<div class="hint" title="Hint 1">

    Implement the service first. `chat(...)` returns plain `.content()`, while
    `review(...)` returns `.entity(CodeReview.class)`.
</div>

<div class="hint" title="Hint 2">

    Implement the controller second. `/chat` is a `GET` endpoint with
    `@RequestParam`; `/review` is a `POST` endpoint with `@RequestBody`.
</div>
