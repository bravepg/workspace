class Person {
    private String name;
    private int age;
    private static String country = "CN";  // 如果是 private，则只能在内部调用
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public void show() {
        System.out.println(this.name + ',' + this.age);
    }

    public static void method() {
        System.out.println(country);
    }
}

class DemoStatic {
    public static void main(String[] args) {
        Person p = new Person("小明", 10);
        p.show();
        // p.method();   // 对象也可以访问静态方法或者变量，但是最好通过类名访问
        Person.method();
    }
}