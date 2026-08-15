public class MultiThread extends Thread {
 public void run()
 {
  for(int i=0;i<10;i++)
  {
  String name=Thread.currentThread().getName();
    System.out.println(name+" :"+i);
  }
 }
 public static void main(String[] args) {
  MultiThread obj=new MultiThread();
  obj.start();
  
  for(int i=0;i<10;i++)
  {
  String name=Thread.currentThread().getName();
    System.out.println(name+"     :"+i);
  }
 }
}

import java.util.LinkedList;
import java.util.Queue;

class SharedBuffer {
    private final Queue<Integer> buffer = new LinkedList<>();
    private final int CAPACITY = 2;

    // Adds data to the buffer (Producer)
    public synchronized void produce(int value) throws InterruptedException {
        // 1. WAITING State: Loop checks if buffer is full
        while (buffer.size() == CAPACITY) {
            System.out.println(Thread.currentThread().getName() + " [Buffer Full] -> Going to WAITING state.");
            wait(); // Releases the lock and waits for consumer to signal
        }

        buffer.add(value);
        System.out.println(Thread.currentThread().getName() + " Produced: " + value);

        // 2. NOTIFY/NOTIFY ALL: Wakes up waiting consumer threads
        notifyAll(); 
    }

    // Removes data from the buffer (Consumer)
    public synchronized int consume() throws InterruptedException {
        // 1. WAITING State: Loop checks if buffer is empty
        while (buffer.isEmpty()) {
            System.out.println(Thread.currentThread().getName() + " [Buffer Empty] -> Going to WAITING state.");
            wait(); // Releases the lock and waits for producer to signal
        }

        int value = buffer.poll();
        System.out.println(Thread.currentThread().getName() + " Consumed: " + value);

        // 2. NOTIFY: Wakes up a single waiting producer thread
        notify(); 
        return value;
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        SharedBuffer buffer = new SharedBuffer();

        // 1. NEW State: Thread objects created but not started
        Thread producer = new Thread(() -> {
            try {
                for (int i = 1; i <= 3; i++) {
                    buffer.produce(i);
                    // 2. TIMED_WAITING (Sleep) State: Forces current thread to temporarily halt
                    System.out.println("-> Producer pausing execution via sleep()...\n");
                    Thread.sleep(1000); 
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }, "Producer-Thread");

        Thread consumer = new Thread(() -> {
            try {
                for (int i = 1; i <= 3; i++) {
                    buffer.consume();
                    Thread.sleep(1500); // Consumer sleeps slightly longer
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }, "Consumer-Thread");

        // 3. RUNNABLE State: Calling start() puts threads in the ready queue
        System.out.println(producer.getName() + " State after instantiation: " + producer.getState()); // NEW
        
        producer.start();
        consumer.start();

        System.out.println(producer.getName() + " State after start(): " + producer.getState()); // RUNNABLE/RUNNING

        // Wait for both threads to finish execution completely
        producer.join();
        consumer.join();

        // 4. TERMINATED State: Execution complete
        System.out.println("\nAll tasks finished. " + producer.getName() + " State: " + producer.getState()); // TERMINATED
    }
}
