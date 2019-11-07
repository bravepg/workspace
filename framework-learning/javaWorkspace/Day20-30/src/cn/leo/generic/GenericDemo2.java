package cn.leo.generic;

import cn.leo.comparator.GenericComparatorByName;
import cn.leo.domain.StudentGeneric;

// import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.TreeSet;

public class GenericDemo2 {

    public static void main(String[] args) {
        Set<StudentGeneric> set = new TreeSet<>(new GenericComparatorByName());

        // set = new HashSet<>();

        set.add(new StudentGeneric("nba", 20));
        set.add(new StudentGeneric("cuba", 16));
        set.add(new StudentGeneric("cba", 18));

        for (Iterator<StudentGeneric> it = set.iterator(); it.hasNext();) {
            System.out.println(it.next());
        }
    }
}
