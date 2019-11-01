class Person {
    private int age = 8; // 显示初始化
    { // 构造代码块
        System.out.println(this.age); // 在显示初始化之后执行
    }
    Person() {
        System.out.println("person run");
    }
    Person(int age) {
        this.age = age;
    }
}

class DemoConsCode {
    public static void main(String[] args) {
        new Person();
    }
}
