package cn.leo.set;

import java.util.HashSet;
import java.util.Iterator;

public class HashSetDemo {

    public static void main(String[] args) {
        HashSet hashSet = new HashSet();

        hashSet.add("america");
        hashSet.add("china");
        hashSet.add("india");

        for (Iterator it = hashSet.iterator(); it.hasNext();) {
            System.out.println(it.next());
        }
    }
}
