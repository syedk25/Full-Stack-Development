package dev.finashkin.springai;

import java.util.List;

/**
 * A predictable Java shape for an AI-generated code review.
 */
public record CodeReview(
        List<String> issues,
        int qualityScore,
        String summary
) {
}
