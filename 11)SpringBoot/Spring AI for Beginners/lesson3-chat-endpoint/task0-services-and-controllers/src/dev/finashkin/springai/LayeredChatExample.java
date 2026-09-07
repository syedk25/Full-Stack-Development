package dev.finashkin.springai;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LayeredChatExample {

    private final ChatApplicationService chatService;

    public LayeredChatExample(ChatApplicationService chatService) {
        this.chatService = chatService;
    }

    @GetMapping("/chat")
    public String chat(@RequestParam String message) {
        return chatService.chat(message);
    }
}

@Service
class ChatApplicationService {

    String chat(String message) {
        return "Model reply for: " + message;
    }
}
