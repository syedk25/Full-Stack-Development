# How Spring Boot serves a request

This course is for Java developers who already know classes, methods, imports,
strings, and simple lists. You do not need previous Spring Boot or AI experience.
All checks run locally with deterministic fake AI models, so no API key is
required.

Before we call an AI model, let's make sure the web layer is clear, because every
endpoint we build sits on top of it.

The editor shows a small reference endpoint. You do not need to edit it; use it
to connect each annotation to the request flow below.

When a request hits your app, Spring Boot routes it like this:

1. The request arrives at a URL, say `GET /hello`.
2. Spring looks for a **controller** method mapped to that path and method.
   A controller is a class marked `@RestController`; a method is mapped with
   `@GetMapping("/hello")` (or `@PostMapping`, etc.).
3. That method runs and returns a value. With `@RestController`, the returned
   value becomes the HTTP response body directly — a plain `String` becomes the
   response text, an object becomes JSON.

That's the whole loop for a simple endpoint: **URL → mapped controller method →
returned value becomes the response.**

Two more pieces you'll use immediately:

- `@RequestParam` reads a value from the query string. For `GET /greet?name=Dmitry`,
  a parameter annotated `@RequestParam String name` receives `"Dmitry"`.
- `@Service` marks a class as a piece of business logic that Spring creates once and
  *injects* wherever it's needed (like into a controller's constructor). We'll keep AI
  logic in a service and let the controller stay thin.

No code to write here — just hit **Check** to continue to the first coding task.
