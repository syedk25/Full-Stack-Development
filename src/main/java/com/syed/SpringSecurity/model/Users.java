package com.syed.SpringSecurity.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity @Data 
public class Users {
    @Id
    private int id;
    private String username;
    private String password;
}
