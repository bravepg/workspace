class Outer {
    int num = 2;
    class Inner {
        int num = 3;
        public void show() {
            int num = 4;
            System.out.println(num);
            System.out.println(this.num);
            System.out.println(Outer.this.num);
        }
    }
    public void method() {
        Inner in = new Inner();
        in.show();
    }
}

class DemoInner2 {
    public static void main(String[] args) {
        Outer out = new Outer();
        out.method();
    }
}