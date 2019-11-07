package cn.leo.list;

import cn.leo.domain.Person;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * 去除 List 中的重复元素
 */
public class ArrayListDemo2 {
    /**
     * 方法一：循环遍历进行判断
     * @param list 集合
     */
    public static void singleElement(List list) {
        for (int x = 0; x < list.size() - 1; x++) {
            Object obj_x = list.get(x);
            for (int y = x + 1; y < list.size(); y++) {
                System.out.println(x + "..." + list.get(x) + "..." + y + "..." + list.get(y));
                if (obj_x.equals(list.get(y))) {
                    list.remove(y);
                    y--; // 由于 remove 的时候 list 的长度会变化，所以每次移除一个元素，就把 y 减 1
                }
            }
        }
    }

    public static void singleElement2(List list) {
        List newList = new ArrayList();

        for (Iterator it = list.iterator(); it.hasNext();) {
            Object obj = it.next();
            if (!newList.contains(obj)) {
                newList.add(obj);
            }
        }

        list.clear();
        list.addAll(newList);
    }

    public static void main(String[] args) {
        List list = new ArrayList();

        list.add("abc1");
        list.add("abc2");
        list.add("abc3");
        list.add("abc4");
        list.add("abc1");
        list.add("abc2");
        list.add("abc3");
        list.add("abc4");
        list.add("abc1");
        list.add("abc2");
        list.add("abc3");
        list.add("abc4");

        System.out.println(list);
        singleElement2(list);
        System.out.println(list);

        Person p1 = new Person("gao", 23);
        Person p2 = new Person("yao", 22);
        Person p3 = new Person("yao", 22);

        List list2 = new ArrayList();
        list2.add(p1);
        list2.add(p1);
        list2.add(p1);
        list2.add(p2);
        list2.add(p3);
        System.out.println(list2);
        singleElement2(list2);
        System.out.println(list2);
    }
}
