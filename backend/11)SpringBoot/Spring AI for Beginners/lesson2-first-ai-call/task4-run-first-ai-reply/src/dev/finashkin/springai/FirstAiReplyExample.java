package dev.finashkin.springai;

/**
 * The deterministic request and response used by the first ChatClient exercise.
 */
public record FirstAiReplyExample(String userMessage, String modelReply) {

    public static FirstAiReplyExample sample() {
        return new FirstAiReplyExample(
                "Say hello in one sentence",
                "Hello from the fake model!"
        );
    }
}
