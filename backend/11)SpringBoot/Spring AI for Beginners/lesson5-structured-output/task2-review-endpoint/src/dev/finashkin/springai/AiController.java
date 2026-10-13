package dev.finashkin.springai;

// add the POST mapping and request-body imports
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AiController {

    private final AiService aiService;

    public AiController(AiService aiService) {
        this.aiService = aiService;
    }

    // map POST /review
    public CodeReview review(/* read the request body */) {
        return null /* delegate to the service */;
    }
}
