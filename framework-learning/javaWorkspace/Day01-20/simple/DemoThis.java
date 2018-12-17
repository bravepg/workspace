class Person {
    private String name;
    private int age;
    // private Person() {
    //     name = "baby";
    // }
    private Person(String n) {
        name = n;
    }
    public Person(String n, int a) {
        // this();   // 不能调用多个构造函数
        this(n);     // 在 JS 中绝对没有这种写法，不存在构造函数的概念
        age = a;
    }
    public void show() {
        // 构造函数不能被一般函数调用
        // Person();
        System.out.println(name + ',' + age);
    }
}

class DemoPerson {
    public static void main(String[] args) {
        Person p = new Person("小明", 10);
        p.show();  // 由于在 Java 中不可以像 JavaScript 那样 var p = p.show; 因此不会发生 this 丢失的情况
    }
}