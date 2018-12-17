class Demo implements Runnable {

    public void run() {
        for (int i = 1; i <= 40; i++) {
            System.out.println(Thread.currentThread().toString() + "..." + i);
        }
    }
}

class ThreadDemo {
    public static void main(String[] args) throws InterruptedException {
        Demo d = new Demo();
        Thread t1 = new Thread(d);
        Thread t2 = new Thread(d);
        t1.start();
        // t1.join(); // t1 执行，main 暂停
        t2.start();
        // t1.join(); // t1 t2 交替执行，main 暂停
        t1.setPriority(Thread.MAX_PRIORITY);
        for (int i = 0; i < 50; i++) {
            System.out.println(Thread.currentThread().toString()  + "..." + i);
        }
    }
}