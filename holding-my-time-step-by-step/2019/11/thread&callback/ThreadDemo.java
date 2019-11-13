class Task implements Runnable {
    private int number = 100;

    public void run() {
        for (int i = 0; i < number; i++) {
            number--;
            System.out.println(Thread.currentThread().getName() + "----" + number);
        }
    }
}

public class ThreadDemo {

    public static void main(String[] args) {

        Task task = new Task();

        Thread t1 = new Thread(task);
        Thread t2 = new Thread(task);
        Thread t3 = new Thread(task);
        Thread t4 = new Thread(task);

        t1.start();
        t2.start();
        t3.start();
        t4.start();
    }
}

