public class wrapper {
 public static void main(String[] args) {

  // Autom Box    pre => obj
  Integer in=Integer.valueOf(100);
  Float fl=Float.valueOf(100.2f);
  String st=String.valueOf("100");

  // Unbox        obj => pre
  int prex=Integer.valueOf(in);
  float pref=Float.valueOf(fl);
  String str=String.valueOf(st);
  
System.out.println(prex);
System.out.println(pref);
System.out.println(str);

// Uses the cache: Both variables point to the exact same object in memory
int a = Integer.valueOf("42");
int b = Integer.valueOf("42");
System.out.println(a == b); // Prints true! (No new memory was used)

// Bypasses caching: Always creates raw primitives on the stack
int c = Integer.parseInt("42");
int d = Integer.parseInt("42");
System.out.println(a==c);

 }
 
}
