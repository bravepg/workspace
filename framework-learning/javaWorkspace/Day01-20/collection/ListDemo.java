import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.ListIterator;;

public class ListDemo {
    public static void main(String[] args) {
        List list = new ArrayList();
        list.add("123");
        list.add("456");
        list.add(1, "789");

        // list.remove(1);
        // System.out.println(list.get(1));

        // 通过 Iterator 遍历
        // for (Iterator it = list.iterator(); it.hasNext();) {
        //     Object obj  = it.next();
        //     if (obj.equals("456")) {
        //         // list.add("000"); // java.util.ConcurrentModificationException 迭代过程中，使用了集合对象同时对元素进行了操作（集合和迭代器引用了同样的元素，出现了并发操作），导致了迭代结果的不确定性。引发了该异常
        //         list.set(1, "000"); // 这个不会报错，因为长度没有变化，remove 也会报错，解决思想：在迭代过程中，使用迭代器的方法就可以了
        //     }
        // }

        // 解决上述问题的办法就是使用 List 集合的特有方法：ListIterator 获取该迭代器对象
        // 可以实现在迭代过程中进行集合的增删改查
        // 就是因为 ListIterator 底层使用了 List 的角标
        for (ListIterator it = list.listIterator(); it.hasNext();) {
            Object obj = it.next();
            if (obj.equals("789")) {
                it.add("000");  // 注意是对迭代对象进行操作而不是 list
            }
        }

        // 通过 for 循环遍历
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
    }
}