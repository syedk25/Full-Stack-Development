package com.syed.SpringSecurity.repo;

import com.syed.SpringSecurity.model.Users; 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<Users, Integer> {

}
