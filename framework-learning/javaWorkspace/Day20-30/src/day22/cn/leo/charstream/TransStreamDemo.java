package day22.cn.leo.charstream;

import java.io.*;

public class TransStreamDemo {

    public static void main(String[] args) throws IOException {

        // 字节通向字符的桥梁，对字节进行解码
        readCNText();

        // 字符通向字节的桥梁，对字符进行编码
        // 字符流 = 字节流 + 编码
        writeCNText();
    }

    private static void readCNText() throws IOException {
        // 1. 若要实现字符流读取字节流，必须先存在字节流
        FileInputStream fis = new FileInputStream("template/cn.md");
        // 2. 创建字节流转字符流的桥梁
        InputStreamReader isr = new InputStreamReader(fis);
        // 3. 对字符流桥梁进行操作
        int len = isr.read();
        System.out.println("len = " + (char)len);
        int len1 = isr.read();
        System.out.println("len1 = " + (char)len1);
        int len2 = isr.read();
        System.out.println("len2 = " + (char)len2);
        int len3 = isr.read();
        System.out.println("len3 = " + len3);

        // 4. 关闭桥梁即可，不需要再单独关字节流 fis
        isr.close();
    }
    private static void writeCNText() throws IOException {
        FileOutputStream fos = new FileOutputStream("template/GBK.md");
        OutputStreamWriter osw = new OutputStreamWriter(fos);
        osw.write("你好");
        // 由于需要对写入对字符进行编码，因此建立缓冲区，等编码完成后，再一次性写入目的地
        // 在最开始的 FileOutputStream 由于写入的是字节，因此不需要缓冲区也是可以的
        // 存在缓冲区，需要进行刷新操作
        osw.flush();
        // close 会调用 flush
        // flush 刷新完，流可以继续使用，close 刷新完，直接关闭，无法再使用
        osw.close();
    }
}
