/**
 * 如何建立一个执行路径呢
 */
class Demo extends Thread {
    private String name;

    Demo(String name) {
        this.name = name;
    }

    /**
     * 注意 getName 只是当前对象的名称，是在继承 Thread 的类的时候出现的
     * 如果想拿到当前线程的名称需要使用 Thread.currentThread().getName()
     */
    public void run() {
        for (int x = 1; x <=10; x++) {
            // System.out.println(getName() + "..." + name + "..." + x);
            System.out.println(Thread.currentThread().getName() + "..." + name + "..." + x);
        }
    }

    /**
     * 这样子实现 start 并未开启线程
     * getName 返回值还是 Thread-0
     * 但是 Thread.currentThread().getName() 返回值是 main
     */
    // public void start() {
    //     this.run();
    // }
}

class ThreadDemo {
    public static void main(String[] args) {
        Demo d1 = new Demo("张三");
        Demo d2 = new Demo("李四");

        d1.start(); // 做了两件事  1，开启线程 2，调用 run 方法 
        d2.start();
        for (int x = 1; x <=10; x++) {
            System.out.println(Thread.currentThread().getName() + "---" + x);
        }
    }
}