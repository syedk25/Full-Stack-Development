package dev.finashkin.springai;

import java.util.List;

/**
 * The deterministic structured response used by the review exercises.
 */
public record ReviewResponseExample(
        List<String> issues,
        int qualityScore,
        String summary
) {

    public static ReviewResponseExample sample() {
        return new ReviewResponseExample(
                List.of("Use .equals() for String comparison"),
                70,
                "String comparison bug."
        );
    }
}
