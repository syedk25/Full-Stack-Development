package dev.finashkin.springai;

import org.springframework.web.bind.annotation.GetMapping;
// add the RequestParam import
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AiController {

    private final AiService aiService;

    public AiController(AiService aiService) {
        this.aiService = aiService;
    }

    // map GET /chat
    public String chat(/* read the message query parameter */) {
        return "service response";
    }
}
