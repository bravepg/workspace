class Demo {
    public static final int num = 0;
    // private static final int num; 这句话编译不通过，因此 final 修饰的是显示初始化而不是默认初始化

    // 成员变量既可以被 public 修饰，也可以被 private 修饰
    // 单例设计模式中的饿汉模式就是使用的 private
    
    // 被 private 修饰的静态变量也无法直接被类调用
    // 只能在本类使用
    // private static final int num2 = 0;
}
class DemoFinal {
    public static void main(String[] args) {
        System.out.println(Demo.num);
    }
}