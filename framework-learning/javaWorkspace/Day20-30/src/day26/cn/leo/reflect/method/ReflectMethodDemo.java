package day26.cn.leo.reflect.method;


import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class ReflectMethodDemo {

    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException {
        getMethod();
    }

    private static void getMethod() throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException {
        // 根据给定的类名获取 Class 对象
        String className = "day26.cn.leo.reflect.domain.Person"; // 一定要写包名
        Class cls = Class.forName(className);


        // 反射方法 非静态 无参数
        Method method = cls.getMethod("show", null);
        Object obj = cls.newInstance();
        method.invoke(obj, null);

        // 反射方法 静态 无参数
        Method staticMethod = cls.getMethod("showStatic", null);
        staticMethod.invoke(null, null);

        // 反射方法 非静态 有参数
        Method paramMethod = cls.getMethod("show", String.class, int.class);
        paramMethod.invoke(obj, "gao", 23);
    }
}
