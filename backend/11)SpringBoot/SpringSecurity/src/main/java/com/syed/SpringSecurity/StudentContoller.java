package com.syed.SpringSecurity;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
public class StudentContoller {

  private  List<Student> students=new ArrayList<>(List.of(
          new Student(1,"king",90),
          new Student(2,"syed",90),
          new Student(3,"mahatheer",99)
  ));
  @GetMapping("/students")
  public List<Student> getStudents(){
    return students;
  }
  @PostMapping("/students")
  public String addStudent(@RequestBody Student student){
    try{
      students.add(student);
      return "Student Added Successful";
    }catch (Exception e){
      return "Student added Failed";
    }
  }

  @GetMapping("/csrf")
  public CsrfToken getCsrfToken(HttpServletRequest request){
    return (CsrfToken) request.getAttribute("_csrf");
  }
}
