/**
 * 存在的问题
 * 每个对象拥有一个单独的 tickets，无法共用
 * 第一个解决思路是：使用 static，但是场景不满足
 * 
 * 那么如何共享 tickets 呢，使用 Runnable，将资源和线程对象分离
 */
class SaleTicket extends Thread {
    private int tickets = 100;

    public void run() {
        while (true) {
            if (tickets > 0) {
                System.out.println(Thread.currentThread().getName() + "---" + tickets--);
            }
        }
    }
}

class TicketsDemo {
    public static void main(String[] args) {
        SaleTicket t1 = new SaleTicket();
        SaleTicket t2 = new SaleTicket();
        SaleTicket t3 = new SaleTicket();
        SaleTicket t4 = new SaleTicket();
        t1.start();
        t2.start();
        t3.start();
        t4.start();
    }
}