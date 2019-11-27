/**
 * 异常的处理有两种方式
 * 1. 遇到问题不进行具体的处理，而是继续抛给调用者
 *      其实就是在函数上通过 throws 关键字声明异常，告诉调用者处理
 * 2. 针对性的处理方式，捕获
 * try {
 *  // 有可能发生异常的代码
 * } catch() {
 *  // 真正的捕获，处理异常代码
 * } finally {
 *  // 一定会被执行的代码
 * }
 */
class Demo {

    /**
     * 在编写功能时，编写者知道该功能有可能发生问题，而这个问题很容易来自于调用者传递的参数
     * 而导致功能无法运行。这时发生的问题就应该让调用者知道。并最好让调用有预先的处理方式
     * 所以在定义功能时，需要在功能上对有可能发生的问题进行声明
     * 声明需要使用关键字 throws 异常类
     * 声明的目的就是：可以让调用者进行处理
     */
    public int div(int a, int b) throws Exception {
        return a / b;
    }
}

public class ExceptionDemo {

    public static void main(String[] args) throws Exception {
        
        try {
            int num = new Demo().div(4, 0);
            System.out.println(num);
        } catch(Exception e) {
            e.printStackTrace(); // 名字 + 位置 + 信息 jvm 默认收到异常就是调用这个方法
        }
        
    }
}