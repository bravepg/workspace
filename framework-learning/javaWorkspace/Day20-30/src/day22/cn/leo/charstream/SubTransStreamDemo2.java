package day22.cn.leo.charstream;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class SubTransStreamDemo2 {

    public static void main(String[] args) throws IOException {

        copyTextBySub();
    }

    private static void copyTextBySub() throws IOException {
        // 创建字符流，关联源文件
        FileReader fr = new FileReader("README.md");
        // 创建写入字符流，传入目的地址
        FileWriter fw = new FileWriter("template/README_STREAM.md");

        char[] chars = new char[1024]; // 共 2048 个字节
        int len;
        while ((len = fr.read(chars)) != -1) {
            fw.write(chars, 0, len);
        }

        fr.close();
        fw.close();
    }
}
