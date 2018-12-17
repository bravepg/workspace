/**
 * 如果同步函数被 static 修饰呢
 * 
 * static 方法随着类加载，这时不一定有该类的对象，但是一定有该类的字节码文件对象
 * 这个对象简单的表示方式就是 类名.class
 */
class SaleTicket implements Runnable {
    private static int tickets = 100;
    public boolean flag = true;
    Object obj = new Object();

    public void run() {
        if (flag) {
            while (true) {
                synchronized(SaleTicket.class) {  // synchronized(obj) { 使用 obj 则会出现数据错误问题
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

    public static synchronized void sale() {
        if (tickets > 0) {
            try { Thread.sleep(10); } catch (InterruptedException e) {}
            System.out.println(Thread.currentThread().getName() + "---func---" + tickets--);
        }
    }
}

class StaticLockDemo {
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