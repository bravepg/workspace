package cn.leo.set;

import cn.leo.comparator.ComparatorByName;
import cn.leo.domain.Student;

import java.util.Iterator;
import java.util.Set;
import java.util.TreeSet;

public class TreeSetDemo2 {

    public static void main(String[] args) {
        // 初始化集合时明确一个比较器
        Set set = new TreeSet(new ComparatorByName());

        Student stu01 = new Student("gao1", 24);
        Student stu02 = new Student("yao2", 20);
        Student stu03 = new Student("gao1", 24);

        set.add(stu01);
        set.add(stu02);
        set.add(stu03);

        for (Iterator it = set.iterator(); it.hasNext();) {
            Student s = (Student)it.next();
            System.out.println(s.getName() + "---" + s.getAge());
        }
    }
}
