package cn.leo.comparator;

import cn.leo.domain.Student;

import java.util.Comparator;

/**
 * 自定义比较器
 * 实现 Comparator 接口，覆盖 compare 方法，将该对象传递给 TreeSet  的构造函数
 */
public class ComparatorByName implements Comparator {
    @Override
    public int compare(Object o1, Object o2) {
        Student s1 = (Student) o1;
        Student s2 = (Student) o2;

        int temp = s1.getName().compareTo(s2.getName());

        return temp == 0 ? s1.getAge() - s2.getAge() : temp;
    }
}
