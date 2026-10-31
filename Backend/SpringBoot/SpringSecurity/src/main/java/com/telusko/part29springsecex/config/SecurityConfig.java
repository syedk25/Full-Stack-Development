package com.telusko.part29springsecex.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration // tells spring to this class contain configuration logic
@EnableWebSecurity // Enable spring security support (so we can configure)
public class SecurityConfig {

    private final UserDetailsService userDetailsService;

    SecurityConfig(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Bean // follwing method executed when project build & value managed by spring
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        return http.csrf(customizer -> customizer.disable()).// disable csrf protection
                authorizeHttpRequests(request -> request
                    .requestMatchers("register","login")
                    .permitAll()
                    .anyRequest().authenticated()). // all users should login
                // .formLogin(Customizer.withDefaults()) // login form
                httpBasic(Customizer.withDefaults()). // for REST Api access, response is json not login form
                // make http stateless to handle session id
                sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();

    }

    // @Bean
    // public UserDetailsService userDetailsService() {
    //
    // UserDetails user1 = User
    // .withDefaultPasswordEncoder()
    // .username("kiran")
    // .password("k@123")
    // .roles("USER")
    // .build();
    //
    // UserDetails user2 = User
    // .withDefaultPasswordEncoder()
    // .username("harsh")
    // .password("h@123")
    // .roles("ADMIN")
    // .build();
    // return new InMemoryUserDetailsManager(user1, user2);
    // }

    // 1-connect with database
    // 2-get data
    // 3-verify data
    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(new BCryptPasswordEncoder(12));
        provider.setUserDetailsService(userDetailsService); // verify u.name&pass
        return provider;
    }

    @Bean
    public AuthenticationManager authentioManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }
}
