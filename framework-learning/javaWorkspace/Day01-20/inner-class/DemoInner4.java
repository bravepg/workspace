abstract class Demo {
    abstract void show();
}
class Outer {
    int num = 2;
    // class Inner {
    //     int num = 3;
        // public void show() {
        //     int num = 4;
        //     System.out.println(num);
        //     System.out.println(this.num);
        //     System.out.println(Outer.this.num);
        // }
    // }
    public void method() {
        // Inner in = new Inner();
        // in.show();
        // 匿名内部类
        new Demo() {
            public void show() {
                int num = 4;
                System.out.println(num);
                System.out.println(this.num);
                System.out.println(Outer.this.num);
            }
        }.show();
    }
}

class DemoInner3 {
    public static void main(String[] args) {
        Outer out = new Outer();
        out.method();
    }
}