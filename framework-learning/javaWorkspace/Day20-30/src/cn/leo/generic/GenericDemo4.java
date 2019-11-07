package cn.leo.generic;

public class GenericDemo4 {

    public static void main(String[] args) {
        Demo<String> demo = new Demo<>();

        demo.show("123");
        // 泛型类中方法参数的类型必须与类保持一致
        // 如果想解决，可以在方法上定义一个泛型————就是泛型方法
        // demo.print(123);
        demo.print(123);

        // 静态方法泛型的书写格式
        Demo.staticShow("1234");
    }
}

class Demo<T> {
    // 静态随着类的加载而加载
    // 但是泛型必须 new 对象才能确定，因此静态方法不能访问定义在类上的泛型
    // 如果静态方法需要定义泛型，只能定义在方法上
    // public static void show(T t) {
    //     System.out.println(t);
    // }
    public static <T> void staticShow(T t) {
        System.out.println(t);
    }
    public void show(T t) {
        System.out.println(t);
    }
    // 这个 T 跟类上的不一致
    public <T> void print(T q) {
        System.out.println(q);
    }
}

