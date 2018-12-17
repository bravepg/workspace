/**
 * 两个储户，到同一个银行存钱，每个人存了3次，每次100
 * 
 * 分析多线程安全隐患
 * 1. 线程任务中是否有共享数据
 * 2. 是否多条操作共享数据的代码
 */
class Bank {
    private int sum;
    // private Object obj = new Object();

    public synchronized void add(int n) {   // 同步函数
        // synchronized(obj) {
            sum = sum + n;
            System.out.println("sum=" + sum);
        // }
    }
}

class Customer implements Runnable {
    private Bank bank = new Bank();
    
    public void run() {
        for (int x = 1; x <= 3; x++) {
            bank.add(100);
        }
    }
}

class BankDemo {
    public static void main(String[] args) {
        Customer c = new Customer();
        Thread t1 = new Thread(c);
        Thread t2 = new Thread(c);
        t1.start();
        t2.start();
    }
}