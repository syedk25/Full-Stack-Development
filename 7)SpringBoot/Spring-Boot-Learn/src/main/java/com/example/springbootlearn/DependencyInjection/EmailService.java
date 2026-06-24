package com.example.springbootlearn.DependencyInjection;

import org.springframework.stereotype.Component;

//TODO STEP 1: Define the dependency blueprint
interface MessageService {
    void sendMessage(String message);
}

//TODO STEP 2: Tell Spring to manage this class using @Component
@Component
class EmailService implements MessageService {
    public EmailService() {
        System.out.println("-> [SPRING FLOW 1] Spring creates the EmailService bean in its factory container.");
    }

    @Override
    public void sendMessage(String message) {
        System.out.println("-> [SPRING FLOW 4] EmailService bean is running: " + message);
    }
}
