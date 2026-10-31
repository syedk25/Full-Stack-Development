package com.telusko.part29springsecex.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.telusko.part29springsecex.model.Users;
import com.telusko.part29springsecex.service.UserService;



@RestController 
public class UserController {
  
 private final UserService service;

 UserController(UserService service) {
  this.service = service;
 }
 
 @PostMapping ("/register")
 public Users getMethodName(@RequestBody Users user) {
     return service.register(user) ;
 }

@PostMapping("/login")
public String login(@RequestBody Users user) {
    System.out.println(user);
    return service.verify(user);
}

 
}
