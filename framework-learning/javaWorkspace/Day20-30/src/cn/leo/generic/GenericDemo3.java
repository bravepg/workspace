package cn.leo.generic;

import cn.leo.domain.GenericJunior;

public class GenericDemo3 {

    public static void main(String[] args) {
        Tool tool = new Tool();

        tool.setObj(new GenericJunior());
        // 如果传递的是 GenericSenior，则会发生 ClassCastException
        // tool.setObj(new GenericSenior());
        // GenericJunior genericJunior = (GenericJunior)tool.getObj();
        // System.out.println(genericJunior.toString());

        Util<GenericJunior> util = new Util<>();
        // util.setObj(new GenericSenior()); 直接会报错
        util.setObj(new GenericJunior());
        GenericJunior genericJunior = util.getObj(); // 不需要再向下转型，泛型已经确定类型
        System.out.println(genericJunior.toString());
    }
}


/**
 * 定义一个工具类，可以操作 GenericJunior
 * 这个类太有局限性了，现在如果再有一个 GenericSenior 要怎么办呢？
 * 因此向上抽取，当要操作的对象类型的不确定的时候，为了扩展，可以用 Object 来完成
 * 但是有个问题就是，出现向下转型可能会发生 ClassCastException
 *
 * jdk 1.5 以后，新的解决方案
 * 类型不确定时，可以对外提供参数，由使用者通过传递参数的形式完成类型的确定
 */
// class Tool {
//     private GenericJunior genericJunior;
//
//     public GenericJunior getGenericJunior() {
//         return genericJunior;
//     }
//
//     public void setGenericJunior(GenericJunior genericJunior) {
//         this.genericJunior = genericJunior;
//     }
// }

/**
 * jdk 1.4
 */
class Tool {
    private Object obj;

    public Object getObj() {
        return obj;
    }

    public void setObj(Object obj) {
        this.obj = obj;
    }
}

/**
 * jdk 1.5
 * 类的泛型
 * 在类定义时就明确参数，由使用该类的调用者，来传递具体的类型
 */
class Util<T> { // 泛型类

    private T obj;

    public T getObj() {
        return obj;
    }

    public void setObj(T obj) {
        this.obj = obj;
    }
}