package day22.cn.leo.charstream;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class SubTransStreamDemo {
    public static void main(String[] args) throws IOException {

        writeText();
        readText();
    }

    private static void readText() throws IOException {
        FileReader fr = new FileReader("template/sub.md");

        int ch;
        while ((ch = fr.read ()) != -1) {
            System.out.println((char)ch);
        }
    }

    private static void writeText() throws IOException {
        // 专门用于操作文件的字符流，是 OutputStreamWriter 的子类，内置 gbk 编码，如果想使用其他编码，需要使用父类
        FileWriter fw = new FileWriter("template/sub.md");

        // 上面一段代码等效于
        // FileOutputStream fos = new FileOutputStream("template/sub.md");
        // OutputStreamWriter osw = new OutputStreamWriter(fos, "gbk");

        fw.write("你好");
        fw.close();
    }
}
