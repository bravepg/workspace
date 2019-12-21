package day26.cn.leo.reflect.domain;

public class Person {
    private String name;
    private int age;
    private static String sex;

    public Person() {
        System.out.println("Person run");
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void show() {
        System.out.println("show run");
    }

    public static void showStatic() {
        System.out.println("staticShow run");
    }

    public void show(String name, int age) {
        System.out.println("paramShow run -- " + name + " --- " + age);
    }
}
