package dev.finashkin.springai;

// add the web annotation imports
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AiController {

    private final AiService aiService;

    public AiController(AiService aiService) {
        this.aiService = aiService;
    }

    // map GET /chat
    public String chat(/* read the message query parameter */) {
        return "chat response";
    }

    // map POST /review
    public CodeReview review(/* read the request body */) {
        return null /* review response */;
    }
}
