package cn.leo.domain;

public class Student implements Comparable {
    private String name;
    private int age;

    public Student(String name, int age) {
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

    /**
     * 通过 age 来判断 hash 是否相同
     * hash 相同后，再通过 equals 来比较内容是否相同
     * @return age
     */
    @Override
    public int hashCode() {
        // 降低冲突概率
        final int NUMBER = 37;
        return name.hashCode() + this.age * NUMBER;
    }

    /**
     * 判断自身内容是否相同
     * @param obj
     * @return
     */
    @Override
    public boolean equals(Object obj) {
        // 为了提高效率，如果是同一个对象直接返回 true
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Student)) {
            throw new ClassCastException("类型错误");
        }
        Student s = (Student) obj;
        return this.name.equals(s.name) && this.age == s.age;
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    /**
     * 该功能是自然排序使用的方法
     * @return
     */
    @Override
    public int compareTo(Object o) {

        Student stu = (Student)o;
        /**
         * 同姓名同年龄视为同一个人
         * 并且顺序按照年龄排序
         * 比较的时候使用 compareTo，注意不能使用 equals，equals 返回的是 boolean
         */
        int temp = this.age - stu.age;
        return temp == 0 ? this.name.compareTo(stu.name) : 0;
    }
}
