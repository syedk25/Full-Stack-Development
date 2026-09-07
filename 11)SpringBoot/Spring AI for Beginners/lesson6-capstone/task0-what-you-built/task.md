# What you are assembling

You now have the pieces of a small AI-powered Spring application:

- REST endpoints with `@RestController`, `@GetMapping`, `@PostMapping`,
  `@RequestParam`, and `@RequestBody`
- A service class with `@Service`
- Constructor injection between controller and service
- ChatClient-style calls for plain text responses
- Prompt templates with parameters
- A structured `CodeReview` record returned as JSON

The capstone puts those pieces into one guided build:

- `GET /chat?message=...` returns a plain model reply.
- `POST /review` accepts a code snippet and returns structured review data.

The hidden tests still use a deterministic fake model. That means this course can
be completed fully on its own, without external course material or provider
setup.
