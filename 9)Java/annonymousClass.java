 
class animal {
 void name(){System.out.println("eagle");}
}

public class annonymousClass{
 public static void main(String[] args) {
  animal obj1=new animal();

  obj1.name();

  // Annonymous class
  animal obj2=new animal(){void name(){System.out.println("parrot");}};
  animal obj3=new animal(){void name(){System.out.println("lion");}};
  obj2.name();
  obj3.name(); 
 }
 
}
