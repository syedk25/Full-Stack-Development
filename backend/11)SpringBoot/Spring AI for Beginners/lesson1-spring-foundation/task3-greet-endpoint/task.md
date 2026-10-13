# Read input from the request

Now make an endpoint that uses input from the caller.

`GreetController` should answer `GET /greet?name=SOMETHING` with **`Hello, SOMETHING!`**.
For example, `GET /greet?name=Dmitry` returns `Hello, Dmitry!`.

Open `GreetController.java` and:

1. Add a method parameter that reads the `name` query parameter:
   `@RequestParam String name`.
2. Return `"Hello, " + name + "!"`.

```java
@GetMapping("/greet")
public String greet(@RequestParam String name) {
    return "Hello, " + name + "!";
}
```

Hit **Check**. The test sends `?name=Dmitry` and expects `Hello, Dmitry!`.

This is the same pattern you'll use to pass a user's message into an AI call — the
input just comes from `@RequestParam` instead of being hard-coded.

<div class="hint" title="Hint">

    Import `RequestParam`, then put `@RequestParam String name` inside the method
    parameter list.
</div>
