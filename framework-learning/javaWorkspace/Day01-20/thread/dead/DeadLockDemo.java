/**
 * 死锁
 * 场景一：锁嵌套
 */
class SaleTicket implements Runnable {
    private int tickets = 100;
    public boolean flag = true;
    Object obj = new Object();

    public void run() {
        if (flag) {
            while (true) {
                synchronized(obj) {
                    sale();
                }
            }
        } else {
            while (true) {
                sale();
            }
        }
    }

    public synchronized void sale() {
        synchronized(obj) {
            if (tickets > 0) {
                try { Thread.sleep(10); } catch (InterruptedException e) {}
                System.out.println(Thread.currentThread().getName() + "---func---" + tickets--);
            }
        }
    }
}

class DeadLockDemo {
    public static void main(String[] args) throws Exception {
        SaleTicket t = new SaleTicket();
        Thread t1 = new Thread(t);
        Thread t2 = new Thread(t);
        t1.start();
        Thread.sleep(10);
        t.flag = false;
        t2.start();
    }
}