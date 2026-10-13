package dev.finashkin.springai;

/**
 * A small model of the final step in a ChatClient call.
 */
public final class ChatClientResponseExample {

    private ChatClientResponseExample() {
    }

    public static String contentOf(ModelResponse response) {
        return response.content();
    }

    public record ModelResponse(String content) {
    }
}
