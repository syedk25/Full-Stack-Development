import java.util.ArrayList;
import java.util.Collections; // Optional: for sorting

public class ArrayListExample {
    public static void main(String[] args) {

        // 1. Instantiation (Using the String Wrapper Class)
        ArrayList<String> fruits = new ArrayList<>();

        // 2. Create (Add elements)
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        fruits.add(1, "Mango"); // Inserts "Mango" at index 1; shifts others

        // 3. Read (Access elements)
        String standardFruit = fruits.get(0); // Returns "Apple"
        int totalElements = fruits.size();    // Returns 4

        // 4. Update (Modify elements)
        fruits.set(2, "Blueberry"); // Replaces "Banana" with "Blueberry"

        // 5. Delete (Remove elements)
        fruits.remove(3);        // Removes "Orange" via index
        fruits.remove("Apple");  // Removes object directly via value matching

        // 6. Verification & Checking
        boolean hasMango = fruits.contains("Mango"); // Returns true
            System.out.println("Fruits have Mango: "+hasMango);
        // 7. Iteration (Looping through elements)
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        System.out.println("Before sorting: " + fruits);

        Collections.sort(fruits); // Sorts alphabetically
        System.out.println("After sorting: " + fruits);

        fruits.clear();
        System.out.println("After clear: " + fruits);
    }
}
