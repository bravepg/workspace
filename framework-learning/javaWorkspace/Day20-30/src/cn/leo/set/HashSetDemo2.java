package cn.leo.set;

import cn.leo.domain.Student;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

/**
 * 存储自定义对象
 * 同姓名，同年龄不允许存储
 */
public class HashSetDemo2 {

    public static void main(String[] args) {
        Set set = new HashSet();

        Student s1 = new Student("gao", 23);
        Student s2 = new Student("yao", 22);
        Student s3 = new Student("gao", 23);
        Student s4 = new Student("li", 22);

        set.add(s1);
        set.add(s2);
        set.add(s3);
        set.add(s4);

        for (Iterator it = set.iterator(); it.hasNext();) {
            /**
             * 我们会发现同姓名，同年龄是可以存储进去的
             * 原因是每一次存储学生对象，都会先调用对象的 hashCode 方法获取哈希值
             * 但是 Student 类中没有定义该方法，只能使用 Object 类中的 hashCode 方法
             *
             * 解决方法：覆写 Object 类中的 hashCode 方法
             */
            System.out.println(it.next());
        }
    }
}
