package com.example.springbootlearn.SpringAop;

import org.springframework.stereotype.Service;

/**
 * THE "TARGET" — a normal business class.
 *
 * Notice: this class knows NOTHING about logging, timing, or error handling.
 * It only does its ONE job: process orders.
 *
 * That's the whole point of AOP — cross-cutting concerns (logging, security,
 * transactions) live OUTSIDE the business class, in an "Aspect".
 */
@Service
public class OrderService {

    /**
     * A method that SUCCEEDS.
     * Our aspect will log before/after and measure how long it took.
     */
    public String placeOrder(String item) {
        // Simulate some real work (database call, payment gateway, etc.)
        try {
            Thread.sleep(300);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        return "Order placed for: " + item;
    }

    /**
     * A method that FAILS — used to demo the @AfterThrowing advice.
     */
    public String payForOrder(String item) {
        // Simulate a payment failure
        throw new RuntimeException("Payment gateway rejected the card for: " + item);
    }
}

