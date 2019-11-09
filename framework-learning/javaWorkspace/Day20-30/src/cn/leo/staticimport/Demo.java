package cn.leo.staticimport;

import java.util.ArrayList;
import java.util.List;

import static java.util.Collections.sort;  // 导入类中的静态成员，如果两个类中静态方法名重复必须要写类名

public class Demo {

    public static void main(String[] args) {
        List<String> list = new ArrayList<>();

        // 静态导入
        // 导入类中的静态成员
        sort(list);
    }
}
