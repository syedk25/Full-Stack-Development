import java.util.Arrays;
import java.util.List;

public class lambdaex1{
    public static void main(String[] args){
        
        List<String> names = Arrays.asList(
            "Alice", "Bob", "Charlie", "Adam");

        System.out.println("All names:");
        names.forEach(name -> System.out.println(name));

        System.out.println("\nNames starting with 'A':");
        names.stream()
            .filter(n -> n.startsWith("A"))
            .map(n -> n.toUpperCase())
            .forEach(System.out::println);

            Innerlambdaex1.showNames(names);
    }
}
 
class Innerlambdaex1 {
  static void showNames(List<String> names)
  {
     names.forEach (name->System.out.println(name)) ;
  }
 
}