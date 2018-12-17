/**
 * 饿汉式，相对于多线程并发，安全
 */
class Single {
    private static final Single SINGLE_INSTANCE = new Single();
    private Single() {}

    public static Single getInstance() {
        return SINGLE_INSTANCE;
    }
}

/**
 * 懒汉式，相对于多线程不安全
 */
class Single2 {
    private static Single s = null;
    private Single() {}

    // public static synchronized Single getInstance() {   // synchronized 解决多线程不安全的问题，但是效率低了
    //     if (s == null) {
    //         s = new Single2();
    //     }
    //     return s;
    // }

    // 解决效率低下的问题 双重判断
    public static Single getInstance() {
        if (s == null) {
            synchronized(Single.class) {
                if (s == null) s = new Single2();
            }
        }
        return s;
    }
}

/**
 * 在开发中，建议使用第一种饿汉式
 */
class DemoFinal {
    public static void main(String[] args) {
        // System.out.println();
    }
}