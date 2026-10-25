package com.syed.SpringSecurity.service;

import com.syed.SpringSecurity.model.UserPrincipal;
import com.syed.SpringSecurity.model.Users;
import com.syed.SpringSecurity.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
     {
        Users user = repo.findByUsername(username).orElse(null);

        if(user==null){
            System.out.println("User Not Found");
            throw new UsernameNotFoundException("user not found"); 
        }
        return new UserPrincipal(user);
    }
}
