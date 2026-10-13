package dev.finashkin.springai;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
class RequestFlowExample {

    private final GreetingService greetingService;

    RequestFlowExample(GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    @GetMapping("/greet")
    String greet(@RequestParam String name) {
        return greetingService.messageFor(name);
    }
}

@Service
class GreetingService {

    String messageFor(String name) {
        return "Hello, " + name + "!";
    }
}
