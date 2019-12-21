package day26.cn.leo.reflect.field;

import java.lang.reflect.Field;

public class ReflectFieldDemo {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchFieldException, InstantiationException, IllegalAccessException {
        getField();
    }

    private static void getField() throws ClassNotFoundException, NoSuchFieldException, IllegalAccessException, InstantiationException {
        // 根据给定的类名获取 Class 对象
        String className = "day26.cn.leo.reflect.domain.Person"; // 一定要写包名
        Class cls = Class.forName(className);

        // Field field = cls.getField("age"); // 该方法只能获取公有的

        Field field = cls.getDeclaredField("age");
        System.out.println(field);

        // 要对非静态的字段操作必须要有对象
        Object obj = cls.newInstance();
        // 使用父类的方法将访问检查权限取消，不然只能获取公有
        field.setAccessible(true); // 暴力访问
        field.setInt(obj, 24);
        System.out.println(field.get(obj));

        Field fieldSex = cls.getDeclaredField("sex");
        fieldSex.setAccessible(true); // 暴力访问
        fieldSex.set(cls, "male");
        System.out.println(fieldSex.get(cls));
    }
}
