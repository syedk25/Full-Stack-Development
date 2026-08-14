import java.util.ArrayList;

class Geeks {
    public static void main(String[] args) {
        char ch = 'a';

        // Autoboxing: char -> Character
        Character c = ch;

        ArrayList<Integer> list = new ArrayList<>();
        // Autoboxing: int -> Integer
        list.add(25);
        System.out.println(list.get(0)); 

        System.out.println("Type of c: " + c.getClass().getName());
        System.out.println("Value of c: " + c);

        System.out.println("Type of ch: " + char.class.getName());
        System.out.println("Value of ch: " + ch);
    }
}
