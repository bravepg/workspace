// class Fu1 {
//     public void show() {
//         System.out.println("Fu1");
//     }
// }
// class Fu2 {
//     public void show() {
//         System.out.println("Fu2");
//     }
// }

// class Zi extends Fu1, Fu2 {

// }
// 不可以多继承
interface InterA {
    public abstract void show();
    public abstract void show1();
}
interface InterB {
    public abstract void show();
    public abstract void show2();
}

class SubInter implements InterA, InterB {
    public void show() {
        System.out.println('A');
    }
    public void show1() {

    }

    public void show2  () {

    }
}

class InterfaceDemo {
    public static void main(String[] args) {
        SubInter sub = new SubInter();
        sub.show();
    }
}