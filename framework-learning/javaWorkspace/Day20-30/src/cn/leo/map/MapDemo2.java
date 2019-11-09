package cn.leo.map;

import cn.leo.domain.Employee;

import java.util.LinkedHashMap;
import java.util.Map;

public class MapDemo2 {

    public static void main(String[] args) {

        // Map<Employee, String> map = new HashMap<>(); 无法保证顺序
        Map<Employee, String> map = new LinkedHashMap<>(); // 保证顺序

        map.put(new Employee("li", 24), "shanghai");
        map.put(new Employee("gao", 23), "beijing");
        map.put(new Employee("yao", 22), "hangzhou");
        map.put(new Employee("yao", 22), "guangzhou");

        for (Employee employee: map.keySet()) {

            String value = map.get(employee);
            System.out.println(employee + "----" + value);
        }
    }
}
