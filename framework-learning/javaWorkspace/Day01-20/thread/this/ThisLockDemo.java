/**
 * 验证同步函数使用的是 this 锁
 * 
 * 启动两个线程，一个使用明锁，一个使用同步函数
 * 如果他们没有使用相同的锁，说明他们没有同步，则会出现数据错误
 * 
 * 怎么让一个线程一直使用同步代码块，一个线程一直使用同步函数呢
 */
class SaleTicket implements Runnable {
    private int tickets = 100;
    public boolean flag = true;
    Object obj = new Object();

    public void run() {
        if (flag) {
            while (true) {
                synchronized(this) {  // synchronized(obj) { 使用 obj 则会出现数据错误问题
                    if (tickets > 0) {
                        try { Thread.sleep(10); } catch (InterruptedException e) {}
                        System.out.println(Thread.currentThread().getName() + "---code---" + tickets--);
                    }
                }
            }
        } else {
            while (true) {
                sale();
            }
        }
    }

    public synchronized void sale() {
        if (tickets > 0) {
            try { Thread.sleep(10); } catch (InterruptedException e) {}
            System.out.println(Thread.currentThread().getName() + "---func---" + tickets--);
        }
    }
}

class TicketsDemo {
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