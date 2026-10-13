package com.example.springbootlearn.DependencyInjection;

import org.springframework.stereotype.Component;

//TODO STEP 3: Tell Spring to manage this class too
@Component
public class NotificationManager {
    private final MessageService messageService;

    //TODO Spring scans this class, notices the constructor needs a MessageService,
    //TODO finds the EmailService bean it created in Step 1, and passes it here automatically.
    public NotificationManager(MessageService messageService) {
        System.out.println("-> [SPRING FLOW 2] Spring calls NotificationManager's constructor.");
        System.out.println("   [SPRING FLOW 2] Spring automatically injects the EmailService bean here.");
        this.messageService = messageService;
    }

    public void sendAlert(String text) {
        System.out.println("-> [SPRING FLOW 3] NotificationManager.sendAlert() method is triggered.");
        this.messageService.sendMessage(text);
    }
}