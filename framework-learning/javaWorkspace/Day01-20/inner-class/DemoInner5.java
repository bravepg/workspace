class Outer {
    public void method() {
        new Object() {
            public void show() {
                System.out.println("show run");
            }
        }.show();  // 编译通过

        Object obj = new Object() {
            public void show() {
                System.out.println("show run");
            }
        };
        obj.show(); // 编译失败，Object obj 指向了自己的子类对象，对象提升为了 Object，就不能使用子类的特有方法（多态的特性）
    }
}
class DemoInner5 {
    public static void main(String[] args) {
        new Outer().method();
    }
}