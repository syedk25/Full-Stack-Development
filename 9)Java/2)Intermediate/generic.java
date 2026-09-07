public class generic{

 // Generic Method
 static <T> void disp(T t){
  System.out.println(t);
 }

 // Generic Class
 static class Box<T>{
   T value;
   void set(T value){
    this.value=value;
   }
   T get(){
    return value;
   }
 }
 
 // Multiple parameter in Generic
 public static <T> void swap(T t, T u){
  System.out.println("Before Swap: "+t+" "+u);
   T temp = t;
   t=u;
   u=temp;
  System.out.println("After Swap: "+t+" "+u);
 }

  public static void main(String[] args) { 
// Generic Method
  disp("hai");
  disp(123);
  disp(12.344);
  disp('c');

  // Generic Class
  Box<Integer> numbers=new Box<>();
  numbers.set(50);
  System.out.println("value : "+numbers.get());

  Box<String> stringBox = new Box<>();
    stringBox.set("Hello");
    System.out.println("Value: " + stringBox.get());

    // Multiple parameter in Generic
   swap("10", "Hello");
   swap("syed", 999);
   swap(666,999);
 }

}
 