package day22.cn.leo.readcn;

import java.io.FileInputStream;
import java.io.IOException;

public class ReadCNDemo {

    public static void main(String[] args) throws IOException {

        // writeCN();
        readCN();
    }

    private static void readCN() throws IOException {
        FileInputStream fis = new FileInputStream("template/cn.md");

        // 读取中文，按照字节的形式，但是一个中文 GBK 码表中是两个字节
        // 而且字节流一次读取一个字节，那么如何获取一个中文呢？
        // int b = fis.read();
        // System.out.println(b);
        //
        // fis.close();

        // 可以一次读取多个字节存在数组中，将字节数组转化为字符串
        byte[] b = new byte[1024];
        int len = fis.read(b);
        String s = new String(b, 0, len); // 将字节数组转化为字符串，而且是按照默认的编码表（GBK）进行解码，注意：会进行解码

        System.out.println(s);
    }

    // private static void writeCN() throws IOException {
    //     FileOutputStream fos = new FileOutputStream("template/cn.md");
    //
    //     fos.write("你好".getBytes()); // 按照默认编码表编码，注意：会进行编码
    //
    //     fos.close();
    // }
}
