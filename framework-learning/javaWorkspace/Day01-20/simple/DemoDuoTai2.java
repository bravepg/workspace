class Fu {
    int num = 4;
    void show() {
        System.out.println("fu");
    }
    void showNum() {
        System.out.println(this);
        System.out.println(this.num);
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
        // Zi z = new Zi();
        // System.out.println(z.num);   // 6

        // Fu f = new Zi();
        // System.out.println(f.num);   // 4

        // 成员函数：当子父类出现同名函数，多态调用时，编译时，看的是引用变量所属类中的方法，运行时，看的是对象所属类中的方法
        // Zi z = new Zi();
        // z.show();  // zi

        // Fu f = new Zi();
        // f.show();  // zi

        // Fu f = new Zi();
        // f.staticMethod();  // fu static

        Fu f = new Zi();
        f.showNum();   // 6
    }
}