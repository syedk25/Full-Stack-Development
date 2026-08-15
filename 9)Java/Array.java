import java.util.Arrays;

public class Array {
 public static void main(String[] args) {
  int[] numbers={1,2,3,4,5};

  System.out.println(numbers);
  for (int i : numbers) {
   System.out.print(i);
  }
  Arrays.fill( numbers,3); 
  for (int i : numbers) {
   System.out.print(i); 
  }
  System.out.println();
  System.out.println(numbers.length);
  int[] rollno={2,1,3,5,4};
  for (int i : rollno) {
   System.out.print(i);
  }
  System.out.println();
  Arrays.sort(rollno);
  for (int i : rollno) {
   System.out.print(i);
  }
  System.out.println();
 }
 
}
