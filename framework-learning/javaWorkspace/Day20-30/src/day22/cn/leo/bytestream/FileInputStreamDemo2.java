package day22.cn.leo.bytestream;

import java.io.FileInputStream;
import java.io.IOException;

public class FileInputStreamDemo2 {

    private static final int DEFAULT_SIZE = 1024;

    public static void main(String[] args) {
        // 演示第二种读取方式。read(byte [])

        // 什么是缓冲？就是临时存储数据的容器
        FileInputStream fis = null;

        try {
            fis = new FileInputStream("README.md");

            byte[] buf = new byte[DEFAULT_SIZE];

            // int len = fis.read(buf);
            //
            // // String 对象可以通过 byte 构造
            // System.out.println(len + " === " + new String(buf));
            int len = 0;

            while ((len = fis.read(buf)) != -1) {
                System.out.println(new String(buf, 0, len));
            }
        } catch (IOException e) {

        } finally {
            if (fis != null) {
                try {
                    fis.close();
                } catch (IOException e) {
                    // 一般可以抛出 Runtime 异常
                    // 或者将异常信息写入到日志文件中，进行记录
                    e.printStackTrace();
                }
            }
        }
    }
}
