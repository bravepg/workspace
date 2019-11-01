class Outer {
    private static int num = 5;

    class Inner { // 相当于外部类中的一个成员，它就可以被成员修饰符修饰。public private static final
        void show() {
            System.out.println(num);
        }
    }
    static class Inner2 {  // 静态，相当于外部类
        static final int count = 5;  // 在非静态内部类中只能定义静态的常量，不能定义其他静态成员
        void show2() {
            System.out.println(num); 
        }
        // 非静态的内部类中不能定义静态方法
        static void show3() {
            System.out.println(num); 
        }
    }
    public void method() {
        Inner in = new Inner();
        in.show();
    }
}

class DemoInner {
    public static void main(String[] args) {
        // Outer out = new Outer();
        // out.method();

        // 如果内部类权限是非私有的，就可以在外部程序中被访问到

        Outer.Inner inner = new Outer().new Inner();
        inner.show();

        Outer.Inner2 inner2 = new Outer.Inner2();
        inner2.show2();

        Outer.Inner2.show3();
    }
}