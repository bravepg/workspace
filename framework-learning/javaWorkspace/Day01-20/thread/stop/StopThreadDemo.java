class Demo implements Runnable {
    private boolean flag = true;

    public synchronized void run() {
        while (flag) {
            try {
                wait();
            } catch (InterruptedException e) {
                flag = false;
                System.out.println(Thread.currentThread().getName() + e.toString());
            }
            System.out.println("Hello-----world");
        }
    }
}

class ThreadDemo {
    public static void main(String[] args) {
        Demo d = new Demo();
        Thread t1 = new Thread(d);
        Thread t2 = new Thread(d);
        t2.setDaemon(true);   // 将 t2 标记为后台线程
        t1.start();
        t2.start();
        for (int x = 0; x < 50; x++) {
            if (x == 40) {
                t1.interrupt();
                // t2.interrupt(); // 如果 t2 标记为后台线程，即使不执行 interrupt，程序也会结束
            }
            System.out.println("main...." + x);
        }
    }
}