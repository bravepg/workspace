package cn.leo.utils;

import java.util.Arrays;
import java.util.List;

public class ArraysDemo {

    public static void main(String[] args) {

        /**
         * 判断数组中是否存在某个元素
         */
        String[] arr = { "abc", "def", "nba" };

        // 需要对数组进行遍历，这样太麻烦了
        // 回想一下集合具有 contains 方法，可以将数组转成集合
        System.out.println(myContains(arr, "nba"));

        // 数组转成集合
        // 这样就是为了使用集合的方法操作数组的元素
        List<String> list = Arrays.asList(arr);
        // 数组转集合的话，不能改变集合的长度（不能使用增删）
        // list.add("qq"); // java.lang.UnsupportedOperationException
        System.out.println(list.contains("def"));

        /**
         * 如果数组中的数据都是引用类型，转成集合时，数组元素直接作为集合元素
         * 如果数组中的都是基本数据类型，会将数组对象作为集合中的元素
         * int[] arr = {1, 2, 3};
         * List list2 = Arrays.asList(arr); // 相当于List<int[]> list2 = Arrays.asList(arr);
         *
         * list2.size(); // 0 将数组对象作为集合中的元素
         */


    }

    public static boolean myContains(String[] arr, String key) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i].equals(key)) {
                return true;
            }
        }
        return false;
    }
}
