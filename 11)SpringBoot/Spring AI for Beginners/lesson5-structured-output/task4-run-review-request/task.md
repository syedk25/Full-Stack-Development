# Observe the review response

In the structured-output tasks, your service and controller handled this kind of
code snippet:

```java
if (status == "ACTIVE") {
    process();
}
```

The hidden checker used a deterministic review result shaped like this:

```json
{
  "issues": ["Use .equals() for String comparison"],
  "qualityScore": 70,
  "summary": "String comparison bug."
}
```

The key point is the shape:

- `issues`
- `qualityScore`
- `summary`

In a real provider-backed Spring AI app, the model would generate the review.
Your Java code would still receive a `CodeReview` object and your controller
would still return JSON with those fields.

No external app or API key is needed for this plugin task. Hit **Check** to
continue.
