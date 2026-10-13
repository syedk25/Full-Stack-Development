package com.example.springbootlearn.SpringDi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public Department department() {
        return new Department("Computer Science");
    }

    @Bean
    public College college() {
        return new College(department());
    }
}