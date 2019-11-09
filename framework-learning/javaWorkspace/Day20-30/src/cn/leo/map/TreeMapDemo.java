package cn.leo.map;

import cn.leo.domain.Employee;

import java.util.Comparator;
import java.util.Map;
import java.util.TreeMap;

public class TreeMapDemo {

    public static void main(String[] args) {

        Comparator<Employee> comparator = Comparator.comparing((Employee o) -> o.getName()).thenComparingInt(o -> o.getAge());

        Map<Employee, String> treeMap = new TreeMap<>(comparator);

        treeMap.put(new Employee("li", 25), "shanghai");
        treeMap.put(new Employee("gao", 24), "beijing");
        treeMap.put(new Employee("yao", 22), "hangzhou");
        treeMap.put(new Employee("yao", 22), "guangzhou");

        for (Map.Entry<Employee, String> me : treeMap.entrySet()) {
            Employee employee = me.getKey();
            String value = me.getValue();

            System.out.println(employee + "====" + value);
        }
    }
}
