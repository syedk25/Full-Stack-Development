# Controllers and services

The first AI call worked, but putting every line in a controller does not scale.
Spring applications usually split the work into two layers:

- A **controller** handles HTTP: paths, query parameters, request bodies, and
  responses.
- A **service** holds application logic: the code that actually does the useful
  work.

For this course, that means:

```java
@RestController
public class AiController {
    // reads /chat?message=...
}
```

and:

```java
@Service
public class AiService {
    // calls ChatClient
}
```

Spring connects them with constructor injection. The controller declares that it
needs `AiService`, and Spring provides it:

```java
public AiController(AiService aiService) {
    this.aiService = aiService;
}
```

In this lesson, you will move the AI call into a service, expose it through
`GET /chat`, and fix a broken dependency-injection example.
