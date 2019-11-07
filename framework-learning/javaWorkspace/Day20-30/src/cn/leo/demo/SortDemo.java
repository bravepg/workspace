package cn.leo.demo;

import java.util.Comparator;

/**
 * 对多个字符串进行排序
 * 允许重复字符串
 *
 * 1. 因为可以重复，所以不能使用 Set 结构
 */
public class SortDemo {

    public static void sortString() {
        String[] strArr = {"gao", "gao123", "yang", "wang"};

        // 双重 for 循环进行排序
        for (int x = 0; x < strArr.length - 1; x++) {
            for (int y = x + 1; y < strArr.length; y++) {
                /**
                 * 自然排序使用的是 String 类的 compareTo 方法
                 * 但是现在想按照长度进行排序
                 * 可以自定义比较器对象
                 */
//                if (strArr[x].compareTo(strArr[y]) > 0) {
//                    String temp = strArr[x];
//                    strArr[x] = strArr[y];
//                    strArr[y] = temp;
//                }

                // 自定义比较器
                Comparator comp = new ComparatorByLength();
                if (comp.compare(strArr[x], (strArr[y]) ) > 0) {
                    String temp = strArr[x];
                    strArr[x] = strArr[y];
                    strArr[y] = temp;
                }
            }
        }

        for (String str: strArr) {
            System.out.println(str);
        }
    }

    public static void main(String[] args) {

        SortDemo.sortString();
    }
}
