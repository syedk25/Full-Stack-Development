package com.syed.SpringSecurity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

// tells springBoot this class contain bean definition and configuration logic
@Configuration
@EnableWebSecurity
// Activate the SpringSecurity & webSecurity support ( Allow to use SecurityFilterChain )
public class SecurityConfig {


  @Bean // the value returned by the following method should be managed by the application context ( spring)
  public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity)
  {                                           // takes httpSecurity Object to configure authorization rules(authentication mechanisms, CSRF protection, and other security-related settings for HTTP requests)
    return httpSecurity.build();
                        // finalize the configuration & return SecurityFilterChain instance
    // SpringSecurity applies this filter to each incomming Http Request

    // in current implementation no security rules are configured
  }

}
