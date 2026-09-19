# Debug the missing service injection

This controller should call `AiService`, but it currently creates a startup
problem: the `aiService` field is never initialized.

Fix `AiController` by adding constructor injection:

```java
public AiController(AiService aiService) {
    this.aiService = aiService;
}
```

Do not create the service with `new`. Let Spring provide it.

The checker starts the web layer and calls `/chat?message=test`. If constructor
injection is correct, the endpoint responds successfully.

<div class="hint" title="Hint">

    Add the constructor inside `AiController`, below the field and above the endpoint
    method.
</div>
