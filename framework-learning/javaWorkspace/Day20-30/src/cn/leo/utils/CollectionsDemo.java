package cn.leo.utils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

/**
 * static <T extends Comparable<? super T>> sort
 *
 */
public class CollectionsDemo {
    public static void main(String[] args) {
        method();
    }

    public static void method() {
        List<String> list = new ArrayList<>();

        list.add("cba");
        list.add("nba");
        list.add("ab");
        list.add("efg");
        System.out.println(list);

        // 对 list 进行排序，使用的是自然排序，元素的 compareTo 方法
        // Collections.sort(list);

        // 按长度进行排序，使用的是自定义排序
        // Collections.reverseOrder 强行逆转比较器的顺序
        Comparator<String> comparator = Collections.reverseOrder(Comparator.comparingInt((String o) -> o.length()));
        Collections.sort(list, comparator);

        System.out.println(list);
    }
}
