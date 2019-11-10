class Demo {

    // 定义垃圾回收方法
    public void finalize() {
        System.out.println("demo ok");
    }
}

public class FinalizeDemo {
    
    public static void main(String[] args) {

        new Demo();
        new Demo();
        System.gc(); // 启动垃圾回收器
        new Demo();
        System.out.println("Hello World");
    }
}