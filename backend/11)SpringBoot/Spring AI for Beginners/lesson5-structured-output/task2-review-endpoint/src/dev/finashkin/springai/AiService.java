package dev.finashkin.springai;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AiService {

    public CodeReview review(String code) {
        return new CodeReview(List.of("Use .equals() for String comparison"), 70, "The code has a String comparison bug.");
    }
}
