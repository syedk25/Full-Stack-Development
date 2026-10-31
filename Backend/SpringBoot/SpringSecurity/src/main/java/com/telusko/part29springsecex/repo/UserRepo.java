
package com.telusko.part29springsecex.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.telusko.part29springsecex.model.Users;
 
public interface UserRepo extends JpaRepository<Users, Integer> {
    Users findByUsername(String username);
}
