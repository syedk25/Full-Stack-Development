package dev.finashkin.springai;

import java.util.List;

/**
 * The entity call both requests a target shape and converts the response to it.
 */
public final class StructuredOutputExample {

    private StructuredOutputExample() {
    }

    public static CodeReview readReview(ResponseSpec response) {
        return response.entity(CodeReview.class);
    }

    public interface ResponseSpec {
        <T> T entity(Class<T> entityType);
    }

    public record CodeReview(
            List<String> issues,
            int qualityScore,
            String summary
    ) {
    }
}
