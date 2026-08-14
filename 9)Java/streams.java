import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class streams {
 public static void main(String[] args) {
  List<String> fruits=Arrays.asList("apple","banana","mango");
 System.out.println(fruits);
  List<String> Fruits = fruits.stream()
  .map(fruit -> fruit.toUpperCase())
  .collect(Collectors.toList());
  System.out.println(Fruits);

  List<String> lowercaseNames = Arrays.asList("sam", "amy", "leo");

  List<String> uppercaseNames = lowercaseNames.stream()
    .map(name -> name.toUpperCase()) // Transforms each string
    .collect(Collectors.toList());


  List<Student> ClassRoom=Arrays.asList(new Student("alice",20),new Student("bob",20));

  List<String> studentNames=ClassRoom.stream().filter(std->std.getName().startsWith("b")).map(std-> std.getName()).collect(Collectors.toList());
 
  System.out.println(studentNames);
System.out.println(uppercaseNames);
 }
}

class Student {
private String name;
private int age;

Student(String name,int age){
 this.name=name;
 this.age=age;
}
 public int getAge() {
  return age;
 }
 public String getName() {
  return name;
 }
}