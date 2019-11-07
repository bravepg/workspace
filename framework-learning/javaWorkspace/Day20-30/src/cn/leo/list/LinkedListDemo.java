package cn.leo.list;

import java.util.LinkedList;

public class LinkedListDemo {
    public static void main(String[] args) {
        LinkedList link = new LinkedList();

        // 1. 增加元素
        link.addFirst("abc1");
        link.addFirst("abc2");
        link.addFirst("abc3");

        // 2. 获取元素
        System.out.println(link.getFirst());

        // 3. 遍历元素，最常用的方式就是使用迭代器，但是面对特有类型
        // 可以有自己的方法
//        while (link.size() > 0) {
//            System.out.println(link.removeFirst());
//        }
        while (!link.isEmpty()) {
            System.out.println(link.removeFirst());
        }
    }
}
