package com.example.springbootlearn.SpringAop;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Triggers the AOP demo automatically at startup.
 *
 * Watch the console: you'll see the aspect's logs wrapping
 * OrderService's methods — even though OrderService has NO
 * logging code inside it.
 */
@Configuration
public class AopRunner {

    @Bean
    public CommandLineRunner runAopDemo(OrderService orderService) {
        return args -> {
            System.out.println("\n========================================");
            System.out.println("   AOP DEMO — SUCCESSFUL METHOD");
            System.out.println("========================================");
            String result = orderService.placeOrder("Laptop");
            System.out.println("[MAIN] Got result: " + result);

            System.out.println("\n========================================");
            System.out.println("   AOP DEMO — FAILING METHOD");
            System.out.println("========================================");
            try {
                orderService.payForOrder("Phone");
            } catch (RuntimeException e) {
                // The exception still propagates to the caller —
                // AOP just observed it on the way out.
                System.out.println("[MAIN] Caught in main: " + e.getMessage());
            }

            System.out.println("\n=== AOP DEMO COMPLETE ===\n");
        };
    }
}

