package com.syed.SpringSecurity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

// tells springBoot this class contain bean definition and configuration logic
@Configuration
@EnableWebSecurity
// Activate the SpringSecurity & webSecurity support ( Allow to use SecurityFilterChain )
public class SecurityConfig {
 
  @Bean // the value returned by the following method should be managed by the application context ( spring)
  public SecurityFilterChain securityFilterChain(HttpSecurity http)
  {                                    
   return  http
    .csrf(customizer -> customizer.disable())
    .authorizeHttpRequests(request -> request.anyRequest().authenticated())
    .httpBasic(Customizer.withDefaults())
    .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
    .build();   
  }

} 
