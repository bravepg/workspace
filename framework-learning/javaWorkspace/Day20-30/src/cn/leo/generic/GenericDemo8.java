package cn.leo.generic;

import cn.leo.domain.GenericJunior;
import cn.leo.domain.StudentGeneric;

import java.util.Comparator;
import java.util.TreeSet;

public class GenericDemo8 {
    /**
     * TreeSet 泛型的下限应用
     * @param args
     *
     * 什么时候用到下限呢？————想要取出对象比较，下限要保证跟集合中的类型一致，范围在大一点就是下限
     * 当从容器中取出元素时，可以用 E 类型接收，也可以用 E 的父类型接收
     */
    public static void main(String[] args) {
        // 泛型的下限
        // TreeSet(Comparator<? super E> c)

        // 这段代码提示我用匿名方法
        // Comparator<StudentGeneric> comparator = new Comparator<StudentGeneric>() {
        //     @Override
        //     public int compare(StudentGeneric o1, StudentGeneric o2) {
        //         int temp = o1.getAge() - o2.getAge();
        //         return temp == 0 ? o1.getName().compareTo(o2.getName()) : temp;
        //     }
        // };

        // 这段代码又提示我使用下面的 Comparator.comparingInt
        // Comparator<StudentGeneric> comparator = (StudentGeneric o1, StudentGeneric o2) -> o1.getName().compareTo(o2.getName());
        Comparator<StudentGeneric> comparator = Comparator.comparingInt((StudentGeneric o) -> o.getAge()).thenComparing(o -> o.getName());

        TreeSet<StudentGeneric> treeSet = new TreeSet<>(comparator);
        treeSet.add(new StudentGeneric("yao", 22));
        treeSet.add(new StudentGeneric("gao", 23));

        TreeSet<GenericJunior> treeSet1 = new TreeSet<>(comparator);
        treeSet1.add(new GenericJunior("li", 25));
        treeSet1.add(new GenericJunior("gao", 23));

        for (StudentGeneric stu: treeSet) {
            System.out.println(stu);
        }
        for (StudentGeneric stu: treeSet1) {
            System.out.println(stu);
        }
    }
}
