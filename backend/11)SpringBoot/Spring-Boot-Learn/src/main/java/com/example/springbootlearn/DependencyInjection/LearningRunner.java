package com.example.springbootlearn.DependencyInjection;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// Tells Spring to process this class for bean configurations
@Configuration
public class LearningRunner {

    // Spring runs this block automatically at startup and passes the NotificationManager bean
    @Bean
    public CommandLineRunner executeLearningFlow(NotificationManager manager) {
        return args -> {
            System.out.println("\n=== STARTING SUB-PACKAGE EXECUTION ===");

            manager.sendAlert("Running safely from its own package context!");

            System.out.println("=== ENDING SUB-PACKAGE EXECUTION ===\n");
        };
    }
}
