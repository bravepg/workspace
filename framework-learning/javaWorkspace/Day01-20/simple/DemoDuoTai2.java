class Fu {
    int num = 4;
    void show() {
        System.out.println("fu");
    }
    void showNum() {
        // 词法作用域，如果子类没有 showNum 则打印 4
        System.out.println(this);
        System.out.println(this.num); // 4
    }
    static void staticMethod() {
        System.out.println("fu static");
    }
}

class Zi extends Fu {
    int num = 6;
    void show() {
        System.out.println("zi");
    }
    // void showNum() {
    //     System.out.println(this);
    //     System.out.println(this.num);
    // }
    static void staticMethod() {
        System.out.println("zi static");
    }
}

class Demo {
    public static void main(String[] args) {

        // 成员变量：当子父类出现同名变量，多态调用时，只看调用该成员变量的引用所属类中的成员变量
        // 简单记法：编译和运行都看左边就 ok 了
        // Zi z = new Zi();
        // System.out.println(z.num);   // 6

        // Fu f = new Zi();
        // System.out.println(f.num);   // 4

        // 成员函数：当子父类出现同名函数，多态调用时，编译时，看的是引用变量所属类中的方法，运行时，看的是对象所属类中的方法
        // 编译看左边，运行看右边
        // Zi z = new Zi();
        // z.show();  // zi

        // Fu f = new Zi();
        // f.show();  // zi

        // Fu f = new Zi();
        // f.staticMethod();  // fu static

        Fu f = new Zi();
        f.showNum();   // 4
    }
}