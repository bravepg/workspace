class Outer {
    int num = 2;
    Object obj;
    public void method() {
        // int x = 3; // 局部内部类不能访问局部变量
        // final int x = 3;   // 可以访问变 final 修饰的变量
        class Inner extends Object {
            public String toString() {
                return "x" + x;   
            }
        }
        Inner in = new Inner();
        obj = in;
    }
    public void function() {
        System.out.println(obj.toString());
    }
}

class DemoInner3 {
    public static void main(String[] args) {
        Outer out = new Outer();
        out.method();
        out.function();
    }
}