class Person {
    private String name;
    private int age;
    public Person(String n) {
        name = n;
    }
    public Person(String n, int a) {
        name = n;
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
        Person p = new Person("小明");
        p.show();
    }
}