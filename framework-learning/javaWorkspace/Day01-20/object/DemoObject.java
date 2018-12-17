class Person {
    private int age;

    /**
     * @param age the age to set
     */
    public void setAge(int age) {
        this.age = age;
    }

    /**
     * @return the age
     */
    public int getAge() {
        return age;
    }
    /**
     * 我们的需求是定义一个比较方法，通过年龄，来比较两个人是否相等
     * 注意 我们在这里不再需要去定义一个 compare 方法，而是直接覆盖 Object 中的方法
     * 要注意覆盖(函数名称 返回值 参数列表都相同)
     * 
     * 其实 JavaScript 的思想与这个一致，某个对象的原型链的顶端有个 Object.toString 的方法
     * 但是我们一般在对象中直接定义 toString 方法去覆盖原型链中的方法
     */
    public boolean equals(Object obj) {   // Object obj = new Person(); 向上转型
        // 提高点效率，如果两个对象指向同一个地址，直接返回 true
        if (this == obj) {
            return true;
        }
        // return this.age == obj.age; // 注意由于 obj 是Object 类型，并且没有 age属性，编译看左边，因此会报错，应该向下转型
        if (obj instanceof Person) {
            Person p = (Person) obj;
            return this.age == p.age;
        }
        return false;
    }
}

class DemoObject {
    public static void main(String[] args) {
        Person p1 = new Person();
        Person p2 = new Person();
        System.out.println(p1.equals(p2)); // 判断对象的内容
        System.out.println(p1 == p2);      // 判断对象的地址
    }
}