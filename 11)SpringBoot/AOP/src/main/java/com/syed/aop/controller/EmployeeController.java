 package com.syed.aop.controller;

 import com.syed.aop.entity.Employee;
 import com.syed.aop.service.EmployeeService;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.http.HttpStatus;
 import org.springframework.http.ResponseEntity;
 import org.springframework.stereotype.Controller;
 import org.springframework.web.bind.annotation.*;

 import java.util.List;

@RestController
@RequestMapping("/code")
 public class EmployeeController{

     @Autowired
     private EmployeeService employeeService;

     @GetMapping("/all")
     public ResponseEntity<?> fetchAllEmployee(){
         return  new ResponseEntity<List<Employee>>(employeeService.getAllEmps(),
                 HttpStatus.OK);
     }
     @PostMapping("add")
     public ResponseEntity<?> addEmployee(@RequestBody Employee e) {
         return new ResponseEntity<Employee>(employeeService.addEmployee(e).HttpStatus.OK);
     }
 }