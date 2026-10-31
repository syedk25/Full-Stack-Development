package com.telusko.part29springsecex.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.telusko.part29springsecex.model.Users;
import com.telusko.part29springsecex.repo.UserRepo;

@Service
public class UserService {
 private final UserRepo repo;
 private final AuthenticationManager authManager;

 UserService(UserRepo repo, AuthenticationManager authManager) {
  this.repo = repo;
  this.authManager = authManager;
 }

 private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

 public Users register(Users user) {
  user.setPassword(encoder.encode(user.getPassword()));
  return repo.save(user);
 }

 public String verify(Users user) {
  Authentication authentication = authManager
    .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
    if (authentication.isAuthenticated()) {
     return "Success";
    }
    return "Fail";
 }
}
