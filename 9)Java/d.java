public class d {
 static <T> void varargs(T[] x){
  System.out.println("Array Length: "+ x.length);
  for (T i : x) {
   System.out.println("Array Element: "+i);
  }
 }
 public static void main(String[] args) {
  Integer[] x={1,2,3,4,5};
  varargs(x);
  String[] fruits={"apple","banana","mango"};
  varargs(fruits);
 }
}
