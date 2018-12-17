package mypack;

import packa.DemoA;  // 导入 packa 中的 DemoA 类，简化类名书写

// import packa.*;   通配符，导入 packa 中的全部类

class PackageDemo {
    public static void main(String[] args) {
        // packa.DemoA d1 = new packa.DemoA();
        DemoA d1 = new DemoA();
        d1.show();
        System.out.println("Hello package");
    }
}