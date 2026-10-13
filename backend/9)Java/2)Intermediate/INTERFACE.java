interface CompleteInterface {

    // 1. Constant (Implicitly public static final)
    int MAX_LIMIT = 100;

    // 2. Abstract Method (Implicitly public abstract)
    void performAction();

    // 3. Default Method (Java 8+)
    default void logStatus() {
        System.out.println("Status: Active");
        helperMethod(); // Calling private method to avoid duplicate code
    }

    // 4. Static Method (Java 8+)
    static void printVersion() {
        System.out.println("Interface Version 1.0");
        staticHelper(); // Calling private static method
    }

    // 5. Private Method (Java 9+)
    private void helperMethod() {
        System.out.println("Internal execution logging...");
    }

    // 6. Private Static Method (Java 9+)
    private static void staticHelper() {
        System.out.println("Internal static logging...");
    }
}
// Save this file as Main.java
public class INTERFACE implements CompleteInterface {

    // 1. Overriding the mandatory abstract method
    @Override
    public void performAction() {
        System.out.println("Executing the mandatory abstract method action.");
    }

    public static void main(String[] args) {
        // Create an instance of the class to access instance-level members
        INTERFACE obj = new INTERFACE();

        System.out.println("--- 1. Accessing Constants ---");
        // Access directly using Interface name or instance
        System.out.println("Max Limit Constant: " + CompleteInterface.MAX_LIMIT);

        System.out.println("\n--- 2. Invoking Abstract Method ---");
        // Calls the overridden implementation
        obj.performAction();

        System.out.println("\n--- 3. Invoking Default Method ---");
        // Inherited directly from the interface
        obj.logStatus();

        System.out.println("\n--- 4. Invoking Static Method ---");
        // Must be called using the Interface name directly
        CompleteInterface.printVersion();
        
        // Note: obj.printVersion() or Main.printVersion() would cause a compile error.
    }
}
