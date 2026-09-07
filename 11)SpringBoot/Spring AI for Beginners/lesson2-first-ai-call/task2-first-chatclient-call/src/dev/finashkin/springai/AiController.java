package dev.finashkin.springai;

import org.springframework.ai.chat.client.ChatClient;

public class AiController {

    private final ChatClient chatClient;

    public AiController(ChatClient.Builder builder) {
        this.chatClient = null /* build the ChatClient */;
    }

    public String chat(String message) {
        return "model response";
    }
}
