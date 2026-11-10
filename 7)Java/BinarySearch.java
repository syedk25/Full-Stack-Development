public class BinarySearch {
 public static int BinarySearchAlgorithm(int[] arr,int key){
  int middle=arr.length/2; 
  int end=arr.length-1;
  int start=0;
  if(key==middle){
    return middle;
  }
  if(key<middle){ 
    end=middle;
  } 
  else start=middle;

   if(key<arr.length){
   for (int i=start;i<=arr[end];i++) {
    if (key==arr[i]) {
     return arr[i];
    }
   }
   }
  return -1;
 }
 public static void main(String[] args) {  int[] x={1,2,3,4,5,6}; 
  int key=3;
  int result=BinarySearchAlgorithm(x, key);
  System.out.println( 
   (result != -1) ? "key:"+key+" found at index:-"+result 
   : "Key "+key+ " not found");
 }
}
