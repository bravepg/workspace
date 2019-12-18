package day22.cn.leo.bytestream;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class FileInputStreamDemo {

    public static void main(String[] args) throws IOException {

        // 为了确保文件一定是在读之前存在，将字符串路径封装成 File 对象
        File file = new File("README.md");

        if (!file.exists()) {
            throw new RuntimeException("文件不存在");
        }

        // 创建文件字节读取流对象，必须明确与之关联的数据源
        FileInputStream fis = new FileInputStream(file);

        int by;
        // 文件都会有一个结束标记
        while ((by = fis.read()) != -1) {
            System.out.println("by1 = " + (char)by);
        }

        // 调用流对象的读取方法
        // int by1 = fis.read();

        // 关闭资源
        fis.close();
    }
}
