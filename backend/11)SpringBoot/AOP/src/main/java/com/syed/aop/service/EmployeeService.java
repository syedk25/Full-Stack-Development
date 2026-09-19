package com.syed.aop.service;

import com.syed.aop.entity.Employee;
import com.syed.aop.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepo employeeRepo;

    public List<Employee> getAllEmps() {
        return employeeRepo.findAll();
    }

    public Object addEmployee(Employee e) {
        return employeeRepo.save(e);
    }
}
