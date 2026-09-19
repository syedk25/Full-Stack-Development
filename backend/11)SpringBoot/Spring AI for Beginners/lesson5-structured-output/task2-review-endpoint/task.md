# Add the review endpoint

The service can now return structured data. Expose it over HTTP.

Complete `AiController.review(...)` so it:

1. Handles `POST /review`.
2. Reads the posted code with `@RequestBody String code`.
3. Returns `aiService.review(code)`.

The checker posts a buggy Java snippet and expects JSON with `issues`,
`qualityScore`, and `summary`.

<div class="hint" title="Hint">

    Use `@PostMapping("/review")` and read the body with `@RequestBody String code`.
    Then return `aiService.review(code)`.
</div>
