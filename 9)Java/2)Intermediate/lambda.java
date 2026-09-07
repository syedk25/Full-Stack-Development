interface Add{
 int addition(int a,int b);
 int x=2;
}

class lambda{
 public static void main(String[] args) {
  Add add=(a,b)->a+b;
  int result=add.addition(10,20);
  System.out.println("Sum : "+result);
 }
} 
/* ----------------------------------------------------------------- */
class SecretClass implements Add{
    int y=x;
 public int addition(int a,int b){return a+b+y;}
}

class withoutlamdba{
    public static void main(String[] args) {
        
    SecretClass obj=new SecretClass();
    System.out.println("Sum : "+obj.addition(10,20));
    }
}



/* 
when you see the line;
Add add = (a, b) -> a + b;
    / \
     |
your not creating instance of the interface

Lambda expression (a, b) -> a + b secretly builds a brand-new hidden class that implements your interface, and creates an object of that hidden class

class SecretClass implements Add {
    public int addition(int a, int b) {
        return a + b;
    }
}
Then, Java replaces your lambda code with an object of that secret class:
Add add = new SecretClass(); // This is what actually happens!


int result = add.addition(10, 20); */

/* if we have more than one funtional interface java look interface type to find parent interface */