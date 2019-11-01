class StaticCode {
    static int num;
    static { // 静态代码块
        num = 10;
        System.out.println("A");
    }
    static void show() {
        System.out.println("show run");
    }
}

class DemoStaticCode {
    static { // 静态代码块
        System.out.println("B");
    }
    public static void main(String[] args) {
        StaticCode.show();
    }
    static { // 静态代码块
        System.out.println("C");
    }
}

// B
// C
// A
// show run
