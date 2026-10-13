package dev.finashkin.springai;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class AiService {

    private final ChatClient chatClient;

    public AiService(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    public CodeReview review(String code) {
        return chatClient.prompt()
                .user(u -> u.text("""
                        You are a Java code reviewer. Review the code below.
                        Identify real bugs and issues, give a quality score from 0 to 100,
                        and a one-sentence summary.

                        Code:
                        {code}
                        """)
                        .param("code", code))
                .call()
                .entity(null /* response type */);
    }
}
