package cn.leo.foreach;

import java.util.ArrayList;
import java.util.Collection;

public class ForeachDemo {

    public static void main(String[] args) {

        Collection coll = new ArrayList();

        coll.add("123");
        coll.add("456");

        for (Object o: coll) {
            System.out.println(o);
        }

        // 对于数组的遍历，如果不操作其角标，可以使用增强 for 循环
        // 如果操作角标，可以使用传统 for 循环
        /**
         * 传统 for 循环和增强 for 循环的区别是什么？
         *
         * 1. 传统 for 没有使用限制，都可以使用
         * 2. 增强 for 必须有被遍历的目标，但是可以简化书写
         */
        int[] arr = new int[]{1, 2, 3};
        for (int i: arr) {
            System.out.println(i);
        }
    }
}
