package dev.finashkin.springai;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("endpoint path")
    public String hello() {
        return "response text";
    }
}
