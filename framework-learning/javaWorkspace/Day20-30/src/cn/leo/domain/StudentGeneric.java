package cn.leo.domain;


public class StudentGeneric implements Comparable<StudentGeneric> {

    private String name;
    private int age;

    public StudentGeneric() {
        this.name = "init";
    }

    public StudentGeneric(String name, int age) {
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
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof StudentGeneric)) {
            throw new ClassCastException("类型错误");
        }

        StudentGeneric s = (StudentGeneric)o;
        return this.name == s.name && this.age == s.age;
    }

    @Override
    public int hashCode() {
        final int NUMBER = 37;
        return this.name.hashCode() + this.age * NUMBER;
    }

    @Override
    public int compareTo(StudentGeneric s) {
        int temp = this.age - s.age;

        return temp == 0 ? this.name.compareTo(s.name) : temp;
    }

    @Override
    public String toString() {
        return "StudentGeneric{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
