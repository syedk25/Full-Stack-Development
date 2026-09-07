import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Anna", "David");

        // 1. Source: Create stream from the list
        List<String> result = names.stream() 
            
            // 2. Intermediate Operations
            .filter(name -> name.startsWith("A")) // Filters names starting with 'A'
            .map(n -> n.toUpperCase())             // Converts strings to UPPERCASE
            .sorted()                             // Sorts alphabetically

            // 3. Terminal Operation
            .collect(Collectors.toList());        // Collects elements into a new List

        System.out.println(result); // Output: [ALICE, ANNA]
    }
}
