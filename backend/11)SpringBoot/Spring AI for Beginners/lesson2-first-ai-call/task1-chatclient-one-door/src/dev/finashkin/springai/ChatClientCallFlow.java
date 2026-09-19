package dev.finashkin.springai;

import java.util.List;

/**
 * The four steps in a Spring AI ChatClient call.
 *
 * <pre>{@code
 * chatClient.prompt()
 *         .user(message)
 *         .call()
 *         .content();
 * }</pre>
 */
public final class ChatClientCallFlow {

    public static final List<String> STEPS = List.of(
            "Start a prompt",
            "Add the user's message",
            "Call the model",
            "Read the model's text content"
    );

    private ChatClientCallFlow() {
    }
}
