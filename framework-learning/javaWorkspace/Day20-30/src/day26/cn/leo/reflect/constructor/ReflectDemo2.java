package day26.cn.leo.reflect.constructor;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

public class ReflectDemo2 {

    public static void main(String[] args) throws ClassNotFoundException, InstantiationException, IllegalAccessException, NoSuchMethodException, InvocationTargetException {
        getObjectByParam();
        getObjectByEmptyParam();
    }

    /**
     * 处理没有空参数构造函数
     * 获取构造函数，然后利用构造函数创建对应的对象
     */
    private static void getObjectByParam() throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        // 根据给定的类名获取 Class 对象
        String className = "day26.cn.leo.reflect.domain.Person"; // 一定要写包名
        Class cls = Class.forName(className);

        // 通过 Class 获取构造函数
        Constructor cons = cls.getConstructor(String.class, int.class);
        // 通过构造函数创建对象
        Object obj = cons.newInstance("gao", 23);
        System.out.println(obj );
    }

    private static void getObjectByEmptyParam() throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        // 根据给定的类名获取 Class 对象
        String className = "day26.cn.leo.reflect.domain.Person"; // 一定要写包名
        Class cls = Class.forName(className);

        // 根据 Class 对象获取对应的对象实例
        // 可能会抛出 java.lang.InstantiationException 异常，原因是没有与之对应的构造函数
        // 我们反射技术一般被用于 JavaBean 这种带有规则的类，并且通常会有空参数构造函数
        Object obj = cls.newInstance(); // 创建一个 Person 对象，默认调用该类的空参数构造函数
        System.out.println(obj);
    }
}
