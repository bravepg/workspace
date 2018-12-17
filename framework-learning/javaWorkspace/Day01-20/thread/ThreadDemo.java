class Demo extends Thread {
    private String name;

    Demo(String name) {
        this.name = name;
    }

    public void run() {
        for (int x = 1; x <=10; x++) {
            System.out.println(getName() + "..." + name + "..." + x);
        }
    }
}

class ThreadDemo {
    public static void main(String[] args) {
        Demo d1 = new Demo("张三");
        Demo d2 = new Demo("李四");

        d1.start();
        d2.start();
        for (int x = 1; x <=10; x++) {
            System.out.println(Thread.currentThread().getName() + "---" + x);
        }
    }
}