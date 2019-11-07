package cn.leo.generic;

import cn.leo.domain.GenericJunior;
import cn.leo.domain.StudentGeneric;

import java.util.ArrayList;
import java.util.Collection;
import java.util.TreeSet;

public class GenericDemo7 {
    /**
     * TreeSet 泛型的上限应用
     * @param args
     *
     * 什么时候用到上限呢？
     * 一般往集合中存储元素时，如果集合定义了 E 类型通常情况下应该存储 E 类型的对象
     * 对 E 的子类型对象，E 类型也可以接收，所以这时可以将泛型从 E 改为 ? extends E
     */
    public static void main(String[] args) {
        // 泛型的上限
        // TreeSet(Collection<? extends E> c)
        Collection<GenericJunior> coll = new ArrayList();
        coll.add(new GenericJunior("gao", 23));
        coll.add(new GenericJunior("yao", 22));

        // 可以接收 StudentGeneric 的类型或者 StudentGeneric 的子类型
        TreeSet<StudentGeneric> treeSet = new TreeSet<>(coll);

        // 多态的演化
        for (StudentGeneric stu: treeSet) {
            System.out.println(stu);
        }
    }
}
