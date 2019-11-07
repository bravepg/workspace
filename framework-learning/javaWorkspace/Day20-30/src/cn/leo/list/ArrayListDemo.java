package cn.leo.list;

import cn.leo.domain.Person;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ArrayListDemo {

    public static void main(String args[]) {
        Person p1 = new Person("gao", 23);
        Person p2 = new Person("yao", 22);

        List list = new ArrayList();

        list.add(p1);
        list.add(p2);
        list.add(1, new Person("li", 23));

        for (Iterator it = list.iterator(); it.hasNext();) {
//            System.out.println(it.next().getName());
//            无法调用 getName，因为对于 it.next() 来说，他返回的是 Object 类型的数据，向上转型了无法使用子类特有的功能
//            如果想使用，需要向下转型
            Person p = (Person) it.next();
            System.out.println(p.getName() + "...." + p.getAge());
        }
    }
}
