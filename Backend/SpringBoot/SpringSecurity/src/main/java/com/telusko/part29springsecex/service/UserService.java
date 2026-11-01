package com.telusko.part29springsecex.service;

import java.security.NoSuchAlgorithmException;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.telusko.part29springsecex.model.Users;
import com.telusko.part29springsecex.repo.UserRepo;

import io.jsonwebtoken.security.InvalidKeyException;

@Service
public class UserService {
  private final UserRepo repo;
  private final AuthenticationManager authManager;
  private final JWTService jwtService;

  UserService(UserRepo repo, AuthenticationManager authManager) {
    this.repo = repo;
    this.authManager = authManager;
    this.jwtService = new JWTService();
  }

  private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

  public Users register(Users user) {
    user.setPassword(encoder.encode(user.getPassword()));
    return repo.save(user);
  }

  public String verify(Users user) throws InvalidKeyException, NoSuchAlgorithmException {
    Authentication authentication = authManager
        .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
    if (authentication.isAuthenticated()) {
      return jwtService.generateToken(user.getUsername());
    } 
    return "Fail";
  }

}
