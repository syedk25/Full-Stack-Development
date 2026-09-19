package dev.finashkin.springai;

import org.springframework.stereotype.Service;

@Service
public class AiService {

    public String chat(String message) {
        return "stub reply for " + message;
    }
}
