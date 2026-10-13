package dev.finashkin.springai;

import org.springframework.web.bind.annotation.GetMapping;
// add the RequestParam import
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetController {

    @GetMapping("/greet")
    public String greet(/* read the name query parameter */) {
        return "build the greeting";
    }
}
