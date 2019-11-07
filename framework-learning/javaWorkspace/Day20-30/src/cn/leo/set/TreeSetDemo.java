package cn.leo.set;

import cn.leo.domain.Student;

import java.util.Iterator;
import java.util.Set;
import java.util.TreeSet;

public class TreeSetDemo {

    public static void main(String[] args) {
        Set set = new TreeSet();

        Student stu1 = new Student("gao", 24);
        Student stu2 = new Student("yao", 20);
        Student stu3 = new Student("gao", 24);

        /**
         * cn.leo.domain.Student cannot be cast to java.lang.Comparable
         * 因为学生需要排序，就需要比较，但是没有定义比较方法，无法完成排序
         * 解决方式：让学生类实现 Comparable 接口
         */
        set.add(stu1);
        set.add(stu2);
        set.add(stu3);

        for (Iterator it = set.iterator(); it.hasNext();) {
            Student stu = (Student)it.next();
            System.out.println(stu.getName() + "..." + stu.getAge());
        }
    }
}
