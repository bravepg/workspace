package cn.leo.generic;

import java.util.ArrayList;
import java.util.List;

public class GenericDemo {

    public static void main(String[] args) {
        // 创建一个 List 集合，存储字符串

        List<String> list = new ArrayList<>();

        list.add("abc");

        for (String str: list) {
            System.out.println(str);
        }
    }
}
