# Return structured data

Free text is hard for code to use. In this task, define the structured result and
ask Spring AI for that type.

First, update `CodeReview` so it has exactly these fields:

```java
public record CodeReview(
        List<String> issues,
        int qualityScore,
        String summary
) {}
```

Then complete `AiService.review(...)` so the call ends with:

```java
.entity(CodeReview.class);
```

The checker verifies the record shape and uses a fake model response to confirm
your service returns a populated `CodeReview`.

<div class="hint" title="Hint 1">

    `issues` is a `List<String>`, so `CodeReview.java` needs `import java.util.List;`.
</div>

<div class="hint" title="Hint 2">

    The last line of the service call should be `.entity(CodeReview.class)`, not
    `.content()`.
</div>
