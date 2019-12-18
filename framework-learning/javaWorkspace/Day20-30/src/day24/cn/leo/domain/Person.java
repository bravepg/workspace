package day24.cn.leo.domain;

import java.io.Serializable;

/**
 * 序列化接口没有方法和字段
 * 仅用于标识
 *
 * Person 类的对象如果需要序列化，就需要实现 Serializable 接口
 * 该接口给需要序列化的类，提供了一个序列化版本号，serialVersionUID
 *
 * 该版本号的目的在于验证序列化的对象和对应的类是否版本匹配（如果用老的类生成对象，但是修改了类，那么将会抛出 InvalidClassException）
 *
 * 所有实现 Serializable 的类，都强烈建议声明 serialVersionUID
 */
public class Person implements Serializable {
    /**
     * 给类显示声明一个序列版本号
     */
    private static final long serialVersionUID = 1L;

    public String name;
    // 瞬态关键字，不允许内存中某些数据存储
    private transient int age;

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

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
