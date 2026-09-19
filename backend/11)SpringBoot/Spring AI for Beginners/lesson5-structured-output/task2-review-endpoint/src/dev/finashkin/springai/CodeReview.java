package dev.finashkin.springai;

import java.util.List;

public record CodeReview(
        List<String> issues,
        int qualityScore,
        String summary
) {
}
