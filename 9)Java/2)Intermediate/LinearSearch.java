public class LinearSearch {
 static int search(int[] arr , int key){
  for (int i : arr) {
   if(i==key){return i;}
  }
  return -1;
 }
 public static void main(String[] args) {
  int[] x={1,2,3,4,5}; 
  int key=5;
  int result=search(x, key);
  System.out.println( 
   (result != -1) ? "key:"+key+" found at index:-"+result 
   : "Key "+key+ " not found");
 }
}
