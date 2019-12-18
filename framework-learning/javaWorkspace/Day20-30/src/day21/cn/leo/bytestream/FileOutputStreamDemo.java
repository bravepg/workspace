package day21.cn.leo.bytestream;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileOutputStreamDemo {

    public static void main(String[] args) throws IOException {

        File dir = new File("template");
        if (!dir.exists()) {
            dir.mkdir();
        }

        // 1. 创建字节输出流对象，用于操作文件对象，在对象初始化时，必须明确数据存储的目的地
        // 2. 凡是输出流所关联的目的地，如果不存在，会自动创建，如果存在，会自动覆盖
        FileOutputStream fos = new FileOutputStream("template/fos.txt");

        // 3. 调用输出流的写功能（option + enter 快速修复代码）
        fos.write("michael".getBytes());

        // 4. 释放资源
        fos.close();
    }
}
