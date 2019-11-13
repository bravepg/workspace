class Task implements Runnable {
    private boolean flag;
    
    public Task(boolean flag) {
        this.flag = flag;
    }
    public void run() {
        if (flag) {
            synchronized(MyLock.locka) {
                System.out.println("if...locka");
                synchronized(MyLock.lockb) {
                    System.out.println("if...lockb");
                }
            }
        } else {
            synchronized(MyLock.lockb) {
                System.out.println("else...lockb");
                synchronized(MyLock.locka) {
                    System.out.println("else...locka");
                }
            }
        }
    }
}

class MyLock {
    public static final Object locka = new Object();
    public static final Object lockb = new Object();
}

public class DeadLockDemo2 {
    public static void main(String[] args) {
        
        Task t1 = new Task(true);
        Task t2 = new Task(false);

        new Thread(t1).start();
        new Thread(t2).start();
    }
}