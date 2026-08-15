public class loop {
 public static void main(String[] args) {
  
  int a=1;
  while(a<=10){
   System.out.println("while: "+a);
   a++;
  }

  a=1;
  do{
   System.out.println("do-while: "+a);
   a++;
  }while(a<=10);

  for(int i=1;i<=10;i++){
   System.out.println("for: "+i);
  }
   String[] str={"syed","mahatheer","mohammed"};
   for (String s : str) {
    if(s=="syed"){continue;}
    if(s=="mohammed"){break;}
    System.out.println(s);
   }
 }
}
