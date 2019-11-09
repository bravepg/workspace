package cn.leo.map;

import java.util.HashMap;
import java.util.Map;

/**
 * 什么时候使用 map
 *
 * 当需求中出现映射关系时
 */
public class MapDemo3 {


    public static void main(String[] args) {
        System.out.println(getEnglishName("星期一"));
    }

    public static String getEnglishName(String name) {
        Map<String, String> map = new HashMap<>();

        map.put("星期一", "Monday");
        map.put("星期二", "Tuesday");
        map.put("星期三", "Wednesday");
        map.put("星期四", "Thursday");
        map.put("星期五", "Friday");
        map.put("星期六", "Saturday");
        map.put("星期日", "Sunday");

        return map.get(name);
    }
}
