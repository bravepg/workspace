package day24.cn.leo.print;

import java.io.IOException;
import java.io.PrintStream;

public class PrintStreamDemo {
    /**
     * PrintStream（字节流）PrintWriter（字符流）
     *
     * 特点：打印，不抛异常
     *
     * 打印的目的地：File 对象，字符串路径，字节输出流
     *
     * 解决问题：方便的打印各种数据值的表现形式
     *
     *  它的打印方法可以保证数值的表现形式不变
     * @param args
     */
    public static void main(String[] args) throws IOException {

        // 创建 PrintStream 对象
        PrintStream ps = new PrintStream("print.md");

        // FileOutputStream fis = new FileOutputStream("print.md");
        // OutputStreamWriter osw = new OutputStreamWriter(fis);
        // 打印 353 ，但是文件中只有一个字节 a，原因是输出流的 write 方法一次只能读一个字节，而且会变成字符存储
        // 对于 FileOutputStream、OutputStreamWriter 表现也是一样
        // 如果想打印的就是 353，可以调用 print 方法
        // ps.write(353);
        ps.print(353); // 保证数值的表现形式，其实就是将数值转化为字符串 相当于 fis.write("353".getBytes());
        ps.close();
    }
}
