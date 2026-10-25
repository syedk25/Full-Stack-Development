package com.syed.SpringSecurity.model;

import java.util.Collection;
import java.util.Collections;
import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserPrincipal implements UserDetails {

 private Users user;

 public UserPrincipal(Users user) {
  this.user=user;
 }

 @Override
 public Collection<? extends GrantedAuthority> getAuthorities() { 
  return Collections.singleton( new SimpleGrantedAuthority("USER"));
  //                 return single object
 }

 @Override
 public @Nullable String getPassword() { 
  return user.getPassword();
 }

 @Override
 public String getUsername() {
  return user.getUsername();
 }
 
 
}
