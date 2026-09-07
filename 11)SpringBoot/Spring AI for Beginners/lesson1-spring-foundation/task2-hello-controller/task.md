# Your first endpoint

Make `HelloController` answer a `GET` request at **`/hello`** with the exact text
**`Hello, Spring AI!`**.

Open `HelloController.java`. Two things to fix:

1. Map the `hello()` method to `GET /hello` — change the `@GetMapping` path.
2. Return the greeting string.

```java
@GetMapping("/hello")
public String hello() {
    return "Hello, Spring AI!";
}
```

Then hit **Check**. The test starts the web layer and confirms `/hello` returns your
greeting with a `200 OK`.

<div class="hint" title="Hint">

    The path belongs inside `@GetMapping(...)`, and the response text is the string
    returned by the method.
</div>
