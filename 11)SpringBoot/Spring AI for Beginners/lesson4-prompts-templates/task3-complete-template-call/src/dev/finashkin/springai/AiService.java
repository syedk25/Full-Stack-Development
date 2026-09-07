package dev.finashkin.springai;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class AiService {

    private final ChatClient chatClient;

    public AiService(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    public String rewriteForBeginner(String text) {
        return chatClient.prompt()
                .user(u -> u.text("""
                        Rewrite this for a beginner Java developer:

                        {replace_me}
                        """)
                        /* bind the template parameter */)
                .call()
                .content();
    }
}
