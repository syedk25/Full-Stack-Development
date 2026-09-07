package dev.finashkin.springai;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Read-only blueprint of the two endpoints assembled in the capstone.
 */
@RestController
public final class FinalApplicationBlueprint {

    private final AiOperations aiService;

    public FinalApplicationBlueprint(AiOperations aiService) {
        this.aiService = aiService;
    }

    @GetMapping("/chat")
    public String chat(@RequestParam String message) {
        return aiService.chat(message);
    }

    @PostMapping("/review")
    public CodeReview review(@RequestBody String code) {
        return aiService.review(code);
    }

    public interface AiOperations {
        String chat(String message);

        CodeReview review(String code);
    }

    public record CodeReview(
            List<String> issues,
            int qualityScore,
            String summary
    ) {
    }
}
