package com.example.springDi;

public class Department {

    private String name;

    public Department(String name) {
        this.name = name;
    }

    public String getDetails() {
        return "Department Details: " + name;
    }
}