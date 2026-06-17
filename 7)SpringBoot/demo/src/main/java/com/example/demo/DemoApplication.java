package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	@RestController
	class HelloController {
		
		@Value("${spring.application.name}")
		private String appName;
	    @GetMapping("/hello")
	    public String sayHello() {
	        return "Hello from Spring Boot + Tomcat!"+"Application Name: "+appName;
	    }
	}
}
