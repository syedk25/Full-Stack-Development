package Learn.swayam;

/* Generic Class */

// We use < > to specify Parameter type

class Test<T> {

    T obj;
    Test(T obj) { 
        this.obj = obj;
    }
    public T getObject() { return this.obj; }
}

class Geeks {
    public static void main(String[] args)
    {
        // instance of Integer type
        Test<Integer> iObj = new Test<Integer>(15);
        System.out.println(iObj.getObject());

        // instance of String type
        Test<String> sObj
            = new Test<String>("GeeksForGeeks");
        System.out.println(sObj.getObject());
    }
}

/* generic method */
public class Generic {

 static <T> void display(T input)
 {
  System.out.println(input);
 }
 public static void main(String[] args) {
  display("hai");
  display(123);
  display(1.23);
 }
}