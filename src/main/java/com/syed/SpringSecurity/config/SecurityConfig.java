package com.syed.SpringSecurity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configurers.userdetails.DaoAuthenticationConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
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
 /*  @Bean // getting object of one of the filter to manually verify u.name/password instead of app.pro
  public UserDetailsService userDetailsService(){
     UserDetails user1=User
     .withDefaultPasswordEncoder()
     .username("k")
     .password("k123")
     .roles("USER")
     .build();
     UserDetails user2=User
     .withDefaultPasswordEncoder()
     .username("s")
     .password("s123")
     .roles("ADMIN")
     .build();
    return new InMemoryUserDetailsManager(user1,user2);
  }
 */

  @Bean 
  public AuthenticationProvider authenticationProvider(){
    DaoAuthenticationProvider provider=new DaoAuthenticationProvider(null);
    provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
    return provider;
  }
} 
