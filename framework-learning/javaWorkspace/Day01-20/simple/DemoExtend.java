// class Fu {
//     int num = 4;
// }
// class Zi extends Fu {
//     int num = 5;
//     void show() {
//         int num = 6;
//         System.out.println(num);
//         System.out.println(this.num);
//         System.out.println(super.num);   // super 区分子父类的同名变量
//     }
// }
final class Fu {
    // static void show() {
    // }
}
class Zi extends Fu {
    // 静态智能覆盖静态或者被静态覆盖
    // public static void show() {
    // }
}

class Person {
    private String name;
    private int age;
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public int getAge() {
        return this.age;
    }
}
class Student extends Person{
    Student(String name, int age) {
        super(name, age);   // 注意由于 name，age 被私有化，因此只能使用这种方式
    }
}
class DemoExtend {
    public static void main(String[] args) {
        new Zi().show();
    }
}