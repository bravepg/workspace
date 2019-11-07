package cn.leo.domain;

/**
 * 数据模型
 * 包名中包含 domain，之前的叫法是 JavaBean
 */
public class Person {
    private String name;
    private int age;

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

    // 集合的方法，包括 contains 等，底层调用等都是 equals 方法，因此在存储自定义类型的元素时，建议在数据模型中覆写 Object 中的 equals 方法
    @Override
    public boolean equals(Object obj) {
        // 为了提高效率，如果是同一个对象直接返回 true
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Person)) {
            throw new ClassCastException("类型错误");
        }
        Person p = (Person) obj;
        return this.name.equals(p.name) && this.age == p.age;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
