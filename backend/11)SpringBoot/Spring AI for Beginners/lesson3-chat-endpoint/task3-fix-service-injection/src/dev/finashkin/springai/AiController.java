package dev.finashkin.springai;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AiController {

    private AiService aiService;

    // inject AiService here

    @GetMapping("/chat")
    public String chat(@RequestParam String message) {
        return aiService.chat(message);
    }
}
