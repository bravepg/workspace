package day22.cn.leo.copy;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class CopyByByte {

    public static void main(String[] args) throws IOException {

        copyTextByByte();
    }

    private static void copyTextByByte() throws IOException {
        File file = new File("template");
        if (!file.exists()) {
            file.mkdir();
        }
        // 1. 创建数据源
        FileInputStream fis = new FileInputStream("README.md");

        // 2. 创建输出流
        FileOutputStream fos = new FileOutputStream("template/README_BYTE.md");

        // 一旦源地址和目标文件地址一致，则会清空文件，因为 FileOutputStream 如果源文件存在会覆盖为空
        // FileOutputStream fos = new FileOutputStream("README.md");

        // 千万不要使用 append，直接进入复制死循环
        // FileOutputStream fos = new FileOutputStream("README.md", true);

        // 3. 进行读写操作
        int b;
        while ((b = fis.read()) != -1) {
            fos.write(b);
        }

        fis.close();
        fos.close();
    }
}
