# Expose the chat endpoint

Now wire the web layer to the service layer.

Complete `AiController` so it:

1. Receives an `AiService` through the constructor.
2. Handles `GET /chat`.
3. Reads a query parameter named `message`.
4. Returns `aiService.chat(message)`.

The finished method shape is:

```java
@GetMapping("/chat")
public String chat(@RequestParam String message) {
    return aiService.chat(message);
}
```

The checker mocks `AiService`, calls `/chat?message=hi`, and verifies the
controller delegates to the service.

<div class="hint" title="Hint 1">

    You need `@GetMapping("/chat")` above the method and `@RequestParam String message`
    inside the parameter list.
</div>

<div class="hint" title="Hint 2">

    The controller should not build a prompt. Its job is only to call
    `aiService.chat(message)`.
</div>
