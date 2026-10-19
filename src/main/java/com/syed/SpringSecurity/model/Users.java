package com.syed.SpringSecurity.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity 
public class Users {
@Id 
 private int id;
 private String name;
 private String password;
}
