/** 
 * 如何共享资源呢？
 * 
 * 在最开始继承 Thread 类的时候，该类既是线程又是任务
 * 因此想到的就是将线程和资源分开， static 是一种方式，但是可扩展性比较弱，不建议使用，要采用面向对象的思想
 * 
 * 可以使用 Runnable 解耦线程对象和任务
 */
class SaleTicket2 implements Runnable {
    private int tickets = 100;
    Object obj = new Object();

    public void run() {
        while (true) {
            synchronized(obj) { // 锁必须是同一个 不能是 new Object()
                if (tickets > 0) {
                    try { Thread.sleep(10); } catch (InterruptedException e) {} // 为了让线程休眠，演示线程不安全的问题
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