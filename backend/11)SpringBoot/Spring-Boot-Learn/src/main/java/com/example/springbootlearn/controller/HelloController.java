package com.example.springbootlearn.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

// 1. Tell Spring Boot this class handles HTTP requests
@RestController
// 2. Base URL for all endpoints in this controller
@RequestMapping("/api")
// 3. Allow React / Frontend apps to access these endpoints!
@CrossOrigin(origins = "*")
public class HelloController {

    // Endpoint 1: http://localhost:8080/api/hello
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello! Welcome to your first Spring Boot API!";
    }

    // Endpoint 2: http://localhost:8080/api/student
    // Demonstrates how Java Objects/Maps automatically turn into JSON!
    @GetMapping("/student")
    public Map<String, Object> getStudentDetails() {
        return Map.of(
            "name", "Syed",
            "role", "Full-Stack Developer Student",
            "skills", List.of("HTML", "CSS", "JavaScript", "React", "Java", "Spring Boot"),
            "isLearning", true
        );
    }

    // Endpoint 3: http://localhost:8080/api/courses
    @GetMapping("/courses")
    public List<String> getCourses() {
        return List.of("Java Core", "Spring Boot", "React.js", "MySQL");
    }
}
