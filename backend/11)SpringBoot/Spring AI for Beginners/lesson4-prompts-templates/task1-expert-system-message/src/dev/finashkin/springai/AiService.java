package dev.finashkin.springai;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class AiService {

    private final ChatClient chatClient;

    public AiService(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    public String chatAsExpert(String message) {
        return "build the expert ChatClient call";
    }
}
