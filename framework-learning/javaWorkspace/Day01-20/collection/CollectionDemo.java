import java.util.Collection;
import java.util.ArrayList;
import java.util.Iterator;

public class CollectionDemo {
    public static void main(String[] args) {
        Collection c1 = new ArrayList();
        Collection c2 = new ArrayList();
        c1.add("abc");
        c1.add("abc1");
        c1.add("abc2");

        c2.add("abc2");
        c2.add("abc3");

        // c1.addAll(c2);
        // System.out.println(c1.toString()); // [abc, abc1, abc2, abc2, abc3]

        // c1.removeAll(c2);
        // System.out.println(c1.toString()); // [abc, abc1]

        System.out.println(c1.containsAll(c2)); // false

        // c1.retainAll(c2);
        // System.out.println(c1.toString()); // [abc2]

        // Iterator it = c1.iterator();
        // while (it.hasNext()) {
        //     System.out.println(it.next());
        // }
        
        // 上述遍历方式，遍历完毕后，it 依然会存在内存中，常用下面的方式进行遍历
        for (Iterator it = c1.iterator(); it.hasNext();) {
            System.out.println(it.next());
        }
        // System.out.println(it.next()); // Exception in thread "main" java.util.NoSuchElementException
    }
}