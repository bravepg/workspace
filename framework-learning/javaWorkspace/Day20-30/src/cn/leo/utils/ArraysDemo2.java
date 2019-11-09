package cn.leo.utils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ArraysDemo2 {

    public static void main(String[] args) {
        // 集合转成数组
        List<String> list = new ArrayList<>();

        list.add("nba");
        list.add("cba");

        /**
         *  String[] arr = list.toArray(new String[0]); // nba cba
         *  String[] arr = list.toArray(new String[1]); // nba cba
         *  String[] arr = list.toArray(new String[3]); // nba cba null
         *
         *  传入的数组长度，如果小于集合长度，方法中会创建一个新长度和集合长度一致的数组
         *  如果传入的数组长度大于或等于集合长度，则使用传入的数组长度，建议使用集合的 size()
         *
         *  为什么要把集合转为数组？
         *  为了限定对元素的操作，比如增删
         */
        String[] arr = list.toArray(new String[3]);

        System.out.println(Arrays.toString(arr));
    }
}
