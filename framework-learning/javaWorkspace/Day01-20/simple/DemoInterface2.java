interface Inter1 {
    public static final int NUM = 2;
    // private static final int NUM1 = 2;  不能定义私有，接口中没有构造函数
    void show1();
}
interface InterA {
    void showA();
}

interface Inter2 extends Inter1, InterA {
    abstract void show2();
}

// abstract class Inter2 extends Inter1, InterA {
//     abstract void show2();
// }
// 这种写法是错误的，即使是抽象类也不支持多继承

// interface class Inter2 extends Inter1, InterA {
//     abstract void show2();
// }
// 这种写法是正确的，接口支持多继承（Java 不支持多继承的本质是为了防止出现调用的不确定性，但是接口都没有方法体，不会出现调用的不确定性）
