package cn.leo.generic;

public class GenericDemo5 {
    public static void main(String[] args) {
        Sub sub = new Sub();
        sub.show("abc");
        Inter<Integer> inter = new InterImpl();
        inter.show(123);
    }
}

// 泛型接口
interface Inter<T> {
    void show(T t);
}

/**
 * 在实现的接口明确是 String 类型
 */
// class InterImpl implements Inter<String> {
//     @Override
//     public void show(String str) {
//
//     }
// }

/**
 * 实现的时候也不明确类型
 * @param <T>
 */
class InterImpl<T> implements Inter<T> {
    @Override
    public void show(T t) {

    }
}

/**
 * 子类继承的时候明确类型
 */
class Sub extends InterImpl<String> {
    @Override
    public void show(String str) {
        System.out.println(str);
    }
}