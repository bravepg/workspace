abstract class Employee {
    private String name;
    private double pay;
    Employee(String name, double pay) {   // 注意这个地方不可以使用 private Employee，因为这样的话无法被子类访问
        this.name = name;
        this.pay = pay;
    }
    /**
     * @return the name
     */
    public String getName() {
        return name;
    }
    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }
    /**
     * @return the pay
     */
    public double getPay() {
        return pay;
    }
    /**
     * @param pay the pay to set
     */
    public void setPay(double pay) {
        this.pay = pay;
    }
    public abstract void work();
}

class Programmer extends Employee {
    Programmer(String name, double pay) {
        super(name, pay);
    }
    public void work() {
        System.out.println("code");
    }
}

class Manager extends Employee {
    Manager(String name, double pay) {
        super(name, pay);
    }
    public void work() {
        System.out.println("manage");
    }
}

class DemoAbstract {
    public static void main(String[] args) {
        Programmer p = new Programmer("高", 10000.0);
        p.work();
    }
}