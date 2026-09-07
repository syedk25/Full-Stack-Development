
import java.io.FileReader;
import java.io.FileNotFoundException;

import java.util.ArrayList;
import java.util.List;


class Exception{
 public static void main(String[] args) { 
  try{
   int result=10/0;
   int[] numbers =new int[5];
   numbers[10]=30;
   System.out.println("Result: "+result);
  }catch(ArithmeticException e){
   System.out.println("Error Message: "+e);
  }catch(ArrayIndexOutOfBoundsException e){
   System.out.println(e);
  }finally{
   InnerException.checkAge(27);
   System.out.println("program executed successfully");
  }
 }
}

// throw new Exception
class InnerException {
 static void checkAge(int a){
  if(a<18){
   throw new IllegalArgumentException("age must be 18 or above");
  }
 }
}

//throws Exception
 class ThrowsExample {

    // 1. Method declares it might throw an exception using 'throws'
    public static void readFile(String filePath) throws FileNotFoundException {
        // This constructor throws FileNotFoundException if the file doesn't exist
        FileReader file = new FileReader(filePath); 
        System.out.println("File opened successfully!");
    }

    public static void main(String[] args) {
        try {
            // 2. The caller MUST handle or declare the exception
            readFile("non_existent_file.txt"); 
        } catch (FileNotFoundException e) {
            // 3. Exception is caught and handled here
            System.out.println("Error handled in main: File was not found!");
        }
    }
}

 class IndexExample {

    // 1. We use 'throws' here to explicitly warn developers that an invalid index will cause an error
    public static String getElementAt(List<String> list, int index) throws IndexOutOfBoundsException {
        // This will automatically throw IndexOutOfBoundsException if index is too large or negative
        return list.get(index); 
    }

    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");

        // Scenario A: Calling the method safely
        try {
            String fruit = getElementAt(fruits, 1);
            System.out.println("Found: " + fruit); // Output: Banana
        } catch (IndexOutOfBoundsException e) {
            System.out.println("This won't run because index 1 is valid.");
        }

        // Scenario B: Passing an invalid index (index 5 does not exist)
        try {
            System.out.println("\nTrying to look up index 5...");
            String missingFruit = getElementAt(fruits, 5); 
            System.out.println("This line will be skipped.");
        } catch (IndexOutOfBoundsException e) {
            // 2. The caller catches the exception and prevents the program from crashing
            System.out.println("Error Handled: Request ignored because index 5 is out of bounds!");
            System.out.println("Reason: " + e.getMessage());
        }
        
        System.out.println("\nProgram successfully continued to the end!");
    }
}


 