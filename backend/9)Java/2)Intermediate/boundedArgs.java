class stats<T extends Number>{
 T[] nums;
 stats(T[] nums){
  this.nums=nums;
 }
 double average(){
  double sum=0;
  for (T t : nums) {
   sum+=t.doubleValue();
  }
  return sum/nums.length;
 }
}


public class boundedArgs {
 public static void main(String[] args) {
  stats<Integer> intnums=new stats<>(new Integer[] {10,20,30,40,50});
  System.out.println(intnums.average());

 stats<Double> doublenums=new stats<>(new Double[] {1.5,2.5,3.5})  ;
 System.out.println(doublenums.average());
 }
}
