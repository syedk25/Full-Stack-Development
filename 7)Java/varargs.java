public class varargs {
 // vararg + multiple args
 static void sum(int... x){
  int sum=0;
  for (int i : x) {
   sum+=i;
  }
  System.out.println(sum);
 }
// varargs + diff DT
static void show(Object... obj){
 for (Object object : obj) {
  System.out.println(object);
 }
}

 public static void main(String[] args) {
  sum(1);
  sum(1,2,3,45,9);
  sum(1,2,3,4,5);

  // varargs + diff DT
  show(1,2,3);
  show();
  show(1,"syed",'c',3.3f,53.3336);
 }
}
