
class Demo {
    public int a = 1;
    public void method() {
        int a = 2;
        System.out.println(a);
        method1();
    }
    public void method1() {
        System.out.println("this" + this);
        System.out.println(a);   // 打印出来 1，Java 与 JavaScript 一样采用的都是词法(静态)作用域，而不是动态作用域
    }
    public static void main(String[] args) {
        new Demo().method();
    }
}