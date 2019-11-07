package cn.leo.domain;

public class GenericJunior extends StudentGeneric {
    public GenericJunior() {
        super();
    }
    public GenericJunior(String name, int age) {
        super(name, age);
    }

    @Override
    public String toString() {
        return "GenericJunior{ name = " + this.getName() + ", age = " + this.getAge() + "}";
    }
}
