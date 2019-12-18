package day21.cn.leo.bytestream;

import java.io.FileOutputStream;
import java.io.IOException;

public class IOExceptionDemo {
    private static final String LINE_SEPARATOR = System.getProperty("line.separator");

    public static void main(String[] args) {

        FileOutputStream fos = null;
        try {
            // append 为 true 实现续写
            fos = new FileOutputStream("README.md", true);
            // 为什么 write 方法也要放在 catch 中呢？
            // 可能存在这样的情况：硬盘被写满了
            fos.write((LINE_SEPARATOR + "michael").getBytes());
        } catch (IOException e) {
            System.out.println(e.toString() + " ---");
        } finally {
            if (fos != null) {
                try {
                    fos.close();
                } catch (IOException e) {
                    throw new RuntimeException("程序运行失败");
                }
            }
        }
    }
}
