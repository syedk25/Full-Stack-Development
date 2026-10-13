package com.syed.SpringSecurity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity; 
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

// tells springBoot this class contain bean definition and configuration logic
@Configuration
@EnableWebSecurity
// Activate the SpringSecurity & webSecurity support ( Allow to use SecurityFilterChain )
public class SecurityConfig {
 
  @Bean // the value returned by the following method should be managed by the application context (spring)
  public SecurityFilterChain securityFilterChain(HttpSecurity http)
  {                                           // takes http Object to configure authorization rules(authentication mechanisms, CSRF protection, and other security-related settings for HTTP requests)
// To disable csrf

/* way-1   Customizer<CsrfConfigurer<HttpSecurity>>  custCsrf= new Customizer<CsrfConfigurer<HttpSecurity>>(){
      @Override 
      public void customize(CsrfConfigurer<HttpSecurity> customizer){
        customizer.disable();
      }
    }; way-2 */

   return  http
     .csrf(customizer -> customizer.disable()) // to allow only authorized users
     .authorizeHttpRequests(request -> request.anyRequest().authenticated())// enable login form in browser
     .formLogin(Customizer.withDefaults())  // in postman instead of getting form, login with header details allow clients to authenticate by sending uname&pass in http header
     .httpBasic(Customizer.withDefaults()) //  make http request stateless ( you will get new session id each time ) http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
    .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
    .build();
                        // finalize the configuration & return SecurityFilterChain instance
    // SpringSecurity applies this filter to each incomming Http Request

    // in current implementation no security rules are configured
  }

} 