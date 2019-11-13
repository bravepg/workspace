/**
 * 通过同步解决了 没生产就消费的情况
 * 
 * 但是出现了多生产多消费的情况：使用等待唤醒机制
 * 
 * wait(): 该方法可以让线程处于冻结状态，并将线程临时存储到线程池中
 * notify(): 唤醒指定线程池中的任一线程
 * notifyAll(): 唤醒指定线程池中的所有线程
 * 
 * 这些方法必须要使用在同步代码块或者同步函数中，因为他们是用来操作同步锁上线程的状态的
 * 在使用这些方法时，必须标识它们的所属于锁，标识方式就是
 * 锁对象.wait()、锁对象.notify()、锁对象.notifyAll()，相同锁的notify() 可以唤醒相同锁的 wait()
 * 
 * 问题1：多生产多消费会出现多消费的问题，是因为被唤醒的线程没有再次判断标记
 * 
 * 解决：被唤醒的线程必须判断标记，使用 while 循环
 * 
 * 问题2：死锁了，本方线程在唤醒时，又一次唤醒了本方线程，而本方线程循环判断标记，又继续等待，导致所有线程都等待
 * 
 * 解决：本方线程唤醒对方线程，可以使用 notifyAll 方法，那不是全唤醒了吗？虽然全部唤醒，但是本方会继续等待
 * 
 * 
 * 多生产多消费的解决方式：就是循环判断标记，唤醒所有线程
 * 
 * 存在的缺点是：效率有点低，由于唤醒了本方线程
 */
class Resource {
    private String name;
    private int count = 1;
    private boolean flag;

    public synchronized void set(String name) {
        while (flag) {   // 判断标记为 true 就等待
            try {this.wait();} catch (InterruptedException e) {}
        }
        this.name = name + "--" + count;
        count++;
        System.out.println(Thread.currentThread().getName() + "...生产者..." + this.name);
        flag = true;
        notifyAll();
    }

    public synchronized void get() {
        while (!flag) {   // 判断标记为 false 就等待
            try {this.wait();} catch (InterruptedException e) {}
        }
        System.out.println(Thread.currentThread().getName() + "----消费者----" + this.name);
        flag = false;
        notifyAll();
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