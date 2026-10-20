package com.syed.SpringSecurity.config;

import org.springframework.beans.factory.annotation.Autowired;
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

  @Autowired 
  private UserDetailsService userDetailsService;

  @Bean // the value returned by the following method should be managed by the application context ( spring)
  public SecurityFilterChain securityFilterChain(HttpSecurity http)
  {                                    
   return  http
    .csrf(customizer -> customizer.disable()) // disabling csrf protection
    .authorizeHttpRequests(request -> request.anyRequest().authenticated()) // only authenticated can login
   // .formLogin(Customizer.withDefaults())   // login form
    .httpBasic(Customizer.withDefaults())  // response is value not login form
    // make http stateless to handle session id
    .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

    .build();   
  }
 // @Bean // it is the filter to manually verify u.name/password instead of app.pro
  public UserDetailsService userDetailsService()
  {
     UserDetails user1=User
     .withDefaultPasswordEncoder() // encryption
     .username("k")      // set name
     .password("k123")   //  set password
     .roles("USER")      // optional (USER/ADMIN)
     .build();                     // return object of UserDetails

     UserDetails user2=User
     .withDefaultPasswordEncoder()
     .username("s")
     .password("s123")
     .roles("ADMIN")
     .build();

    return new InMemoryUserDetailsManager(user1,user2);
  }

  @Bean 
  public AuthenticationProvider authenticationProvider(){
    DaoAuthenticationProvider provider=new DaoAuthenticationProvider(userDetailsService);
    provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance()); // no password encoder
    return provider;
  }
} 
