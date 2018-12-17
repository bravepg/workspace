/**
 * Runnable 解耦了线程对象和任务
 */
class SaleTicket2 implements Runnable {
    private int tickets = 100;
    Object obj = new Object();

    public void run() {
        while (true) {
            synchronized(obj) {
                if (tickets > 0) {
                    try { Thread.sleep(10); } catch (InterruptedException e) {}
                    System.out.println(Thread.currentThread().getName() + "---" + tickets--);
                }
            }
        }
    }
}

class TicketsDemo2 {
    public static void main(String[] args) {
        SaleTicket2 t = new SaleTicket2();
        Thread t1 = new Thread(t);
        Thread t2 = new Thread(t);
        Thread t3 = new Thread(t);
        Thread t4 = new Thread(t);
        t1.start();
        t2.start();
        t3.start();
        t4.start();
    }
}