/**
 * 解决多生产多消费的效率问题
 * 
 * 使用 JDK1.5 提供的 Lock 接口 
 * 
 * JDK1.5 Lock接口，按照面向对象的思想，将所单独封装成了一个对象
 * 并提供了对锁的显示操作
 *      lock()   获取锁
 *      unlock() 释放锁
 * Lock 接口就是同步的替代
 * 
 * 替换之后，运行失败，因为 wait 没有了所属的同步锁
 * 
 * 同步升级了，其中的锁已经不再是任意对象而是 Lock 类型的对象
 * 那么和任意对象绑定的监视器方法也升级了，出现了专门和 Lock 类型的对象绑定的监视器方法
 * 
 * Condition 接口替代了监视器方法，以前监视器方法封装到每个对象中，现在将监视器方法封装到 Condition 对象中
 * 
 * 但是问题依旧，一样唤醒了本方
 * 解决方式：使用两个监视器
 */
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;

class Resource {
    private String name;
    private int count = 1;
    private Lock lock = new ReentrantLock();
    // 生产者监视器
    private Condition producerCon = lock.newCondition();
    // 消费者监视器
    private Condition consumerCon = lock.newCondition();
    private boolean flag;

    public void set(String name) {
        // 获取锁
        lock.lock();
        try {
            while (flag) {   // 判断标记为 true 就等待
                try {producerCon.await();} catch (InterruptedException e) {}
            }
            this.name = name + "--" + count;
            count++;
            System.out.println(Thread.currentThread().getName() + "...生产者..." + this.name);
            flag = true;
            consumerCon.signal();
        } finally {
            // 释放锁
            lock.unlock();
        }
    }

    public void get() {
        // 获取锁
        lock.lock();
        try {
            while (!flag) {   // 判断标记为 false 就等待
                try {consumerCon.await();} catch (InterruptedException e) {}
            }
            System.out.println(Thread.currentThread().getName() + "----消费者----" + this.name);
            flag = false;
            producerCon.signal();
        } finally {
            // 释放锁
            lock.unlock();
        }
    }
}

class Producer implements Runnable {
    private Resource res;

    public Producer(Resource res) {
        this.res = res;
    }

    public void run() {
        while (true) {
            res.set("面包");
        }
    }
}

class Consumer implements Runnable {
    private Resource res;

    public Consumer(Resource res) {
        this.res = res;
    }

    public void run() {
        while (true) {
            res.get();
        }
    }
}

class ProducerConsumerDemo {
    public static void main(String[] args) {
        Resource res = new Resource();
        Producer pro = new Producer(res);
        Consumer con = new Consumer(res);

        new Thread(pro).start();
        new Thread(pro).start();
        new Thread(con).start();
        new Thread(con).start();
    }
}