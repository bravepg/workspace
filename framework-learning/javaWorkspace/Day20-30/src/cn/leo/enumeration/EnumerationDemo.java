package cn.leo.enumeration;

import java.util.Enumeration;
import java.util.Iterator;
import java.util.Vector;

public class EnumerationDemo {

    public static void main(String[] args) {

        /**
         * 只有 Vector 具备这种遍历方式
         */
        Vector v = new Vector();

        v.add("abc1");
        v.add("abc2");
        v.add("abc3");

        // while 循环
//        Enumeration en = v.elements();
//        while (en.hasMoreElements()) {
//            System.out.println("enumeration" + en.nextElement());
//        }

        // 获取枚举
        for (Enumeration en = v.elements(); en.hasMoreElements();) {
            System.out.println("enumeration" + en.nextElement());
        }
        // 获取迭代
        // 迭代的时候可以操作元素
        for (Iterator it = v.iterator(); it.hasNext();) {
            System.out.println("iterator" + it.next());
        }
        // 高级 for
        for (Object o: v) {
            System.out.println("foreach" + o);
        }
    }
}
