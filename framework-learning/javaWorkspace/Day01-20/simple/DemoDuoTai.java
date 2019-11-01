abstract class Animal {
    abstract void eat();
}

class Dog extends Animal {
    void eat() {
        System.out.println("吃骨头");
    }
    void lookHome() {
        System.out.println("看家");
    }
}

class Cat extends Animal {
    void eat() {
        System.out.println("吃鱼");
    }
    void catchMouse() {
        System.out.println("抓老鼠");
    }
}

class DuoTaiDemo {
    public static void main(String[] args) {
        Dog d1 = new Dog();
        Dog d2 = new Dog();
        Dog d3 = new Dog();
        method(d1);
        method(d2);
        method(d3);

        Cat c1 = new Cat();
        Cat c2 = new Cat();
        Cat c3 = new Cat();
        method(c1);
        method(c2);
        method(c3);

        Animal a = new Cat(); // 向上转型，隐藏了子类型，提高了代码的扩展性  // 弊端，不能使用子类的特有类型，功能被限定了
        // 如果想使用子类特有功能呢？
        // 只要转换类型和对象类型不匹配就会发生，需要进行判断
        if (!(a instanceof Dog)) {
            return;
        }
        Dog d = (Dog)a;  // 向下转型，可以使用子类型的特有功能，向下转型有风险，容易发生 ClassCastException
        d.eat();
        d.lookHome();
    }
    
    // 下面的代码都是面对具体的子类对象，导致程序的扩展性比较差，为什么不面对父类呢
    // public static void method(Dog d) {
    //     d.eat();
    // }
    // public static void method(Cat c) {
    //     c.eat();
    // }
    public static void method(Animal a) {
        // 使用 Animal a，当面对共性内容时，所有的子类对象都可以接收，提高了代码的扩展性
        a.eat();
        // a.lookHome(); 报错，不能使用子类的特有功能
    }
}