package cn.leo.generic;

import cn.leo.domain.GenericJunior;
import cn.leo.domain.StudentGeneric;

import java.util.*;

public class GenericDemo6 {
    public static void main(String[] args) {

        List<String> list = new ArrayList<>();
        list.add("gao");
        printCollection(list);

        Set<String> set = new HashSet<>();
        set.add("yao");
        printCollection(set);

        Set<Integer> treeSet = new TreeSet<>();
        treeSet.add(1);
        printCollection(treeSet);

        // 编译通过，GenericJunior 在存入集合的时候会向上转型调用父类中定义的 hashCode 方法
        // Set<GenericJunior> setJunior = new HashSet<>();
        // setJunior.add(new GenericJunior());

        // 编译失败，GenericJunior 是子类型，无法存入父类型，防止出现类型不匹配
        // Set<GenericJunior> setStudent = new HashSet<>();
        // setStudent.add(new StudentGeneric());

        Set<GenericJunior> setJunior = new HashSet<>();
        setJunior.add(new GenericJunior());
        printCollection2(setJunior);

        Set<StudentGeneric> setStudent = new HashSet<>();
        setStudent.add(new StudentGeneric());
        printCollection2(setStudent);
    }

    /**
     * 在该方法中，参数集合的泛型必须是 String，不可以是 Object 或者其他
     * 否则就类似这种定义 Collection<Object> coll = new ArrayList<String>();
     * 出现类型不匹配的问题
     *
     * 解决方式是通过通配符
     * @param coll 集合
     */
    // public static void printCollection(Collection<String> coll) {
    //     for (String col: coll) {
    //         System.out.println(col);
    //     }
    // }
    public static void printCollection(Collection<?> coll) { // ? 就是通配符
        for (Object col: coll) {
            System.out.println(col);
        }
    }

    /**
     * 上述的通配符类似于 Object，范围很大，对泛型进行限定有两种方式
     * 泛型的限定
     * 第一种表现形式
     * ? extends E，代表接收 E 类型和类的子类型————泛型上限
     *
     * 第二种表现形式
     * ? super E，代表接收 E 类型和类的父类型————泛型下限
     */

    public static void printCollection2(Collection<? extends StudentGeneric> generic) { // ? 就是通配符
        for (StudentGeneric gen: generic) {
            System.out.println(gen);
        }
    }
}
