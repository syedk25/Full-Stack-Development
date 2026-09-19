public class array {
 public static void main(String[] args) {
  Innerarray[] persons=new Innerarray[10];
  persons[0]=new Innerarray(10,"syed");
  
 }
 
}


class Innerarray {
private int age;
private String name;

Innerarray(int age,String name){
 this.age=age;
 this.name=name;
}
public String getName() {
 return name;
}
public void setAge(int age) {
 this.age = age;
}
public void setName(String name) {
 this.name = name;
}
 
}