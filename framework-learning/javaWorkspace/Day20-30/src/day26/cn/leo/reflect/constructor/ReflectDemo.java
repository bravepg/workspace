package day26.cn.leo.reflect.constructor;

import day26.cn.leo.reflect.domain.Person;

public class ReflectDemo {

    /**
     * 反射技术：动态的获取类以及类中的成员，并可以调用该类成员
     * 以前是有什么类，就 new 什么对象
     * 现在是给什么类，就 new 什么对象
     *
     * 无论 new 什么对象，都需要获取字节码文件
     * 如何获取字节码文件呢？发现对字节码文件进行了描述的类 Class
     *
     * 我们可以通过以下几种方式获取字节码文件对象
     *
     * 方式一：Object.getClass()
     *  在反射技术里该方法不合适，因为反射技术不明确具体类
     *
     * 方式二：所有的数据类型都有自己对应的 class 对象
     *  每一个数据类型都有一个默认的静态属性 .class，用该属性就可以获取到对应的字节码文件对象
     *
     *  虽然不用对象调用了，但是还是要用具体的类调用静态属性，在反射技术了也不合适
     *
     * 方式三：Class 类中的 forName 方法，反射技术里最常用的包名
     *
     * @param args
     */
    public static void main(String[] args) throws ClassNotFoundException {

        methodDemo_1();
        methodDemo_2();
        methodDemo_3();
    }

    private static void methodDemo_3() throws ClassNotFoundException {
        String className = "day26.cn.leo.reflect.domain.Person"; // 一定要写包名

        Class cls = Class.forName(className);
        System.out.println(cls);
    }

    // 获取 Class 对象的方式一
    private static void methodDemo_1() {
        // 调用 class 要先有对象
        Person p1 = new Person();
        Person p2 = new Person();

        System.out.println(p1.getClass() == p2.getClass());
    }
    // 获取 Class 对象的方式二
    private static void methodDemo_2() {
        System.out.println(Person.class);
    }
}
