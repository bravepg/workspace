package cn.leo.map;

import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class MapDemo {
    public static void main(String[] args) {

        Map<String, String> map = new HashMap<>();

        map.put("li", "shanghai");
        map.put("gao", "beijing");
        map.put("yao", "beijing");

        // map 集合没有迭代器，可以将 map 集合先转成 set 集合
        // // 取出所有的键，并存储到 set 集合中，因为键不可重复，所以通过 Set 来存储
        // Set<String> keySey = map.keySet();
        //
        // // 迭代器类型跟集合保持一致
        // for(Iterator<String> it = keySey.iterator(); it.hasNext();) {
        //     String key = it.next();
        //     System.out.println(key + "----" + map.get(key));
        // }

        // 取出所有关系 entrySet
        // Map.Entry 其实就是 Map 接口中的一个内部接口
        // Set<Map.Entry<String, String>> entrySet = map.entrySet();
        //
        // for (Iterator<Map.Entry<String, String>> it = entrySet.iterator(); it.hasNext();) {
        //
        //     Map.Entry<String, String> me = it.next();
        //     System.out.println(me.getKey() + "----" + me.getValue());
        // }

        // 取出所有值，因为值是可以重复的，所以返回的不是 Set 而是 Collection
        Collection<String> coll = map.values();
        for (Iterator<String> it = coll.iterator(); it.hasNext();) {
            System.out.println(it.next());
        }
    }
}
