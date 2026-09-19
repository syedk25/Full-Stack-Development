# Quick check: reading query parameters

You just built `/greet?name=Dmitry`. The method parameter that received `"Dmitry"`
was annotated with one specific annotation.

Pick the annotation that binds a **query-string** value (the part after `?`) to a
controller method parameter.

Each of the others has a different job:

- `@GetMapping` maps the HTTP method and path.
- `@PathVariable` reads a value embedded in the path itself, like `42` in `/users/42`.
- `@RequestBody` reads the request body (used for POST with JSON, coming later).
