package day24.cn.leo.sequence;

import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;

public class SequenceDemo {
    /**
     * 特点：流对象的有序排列
     * 解决问题：将多个输入流变成一个输入流。将多个源合并成一个源，对于多个源的操作会变得简单
     * 功能：一旦初始化会有多个源
     *
     * 使用场景之一：对多个文件进行数据的合并
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 如何创建 Enumeration，需要使用 Vector 对象，但是效率低，使用 ArrayList
        ArrayList<FileInputStream> arrayList = new ArrayList<>();
        arrayList.add(new FileInputStream("sequence/1.md"));
        arrayList.add(new FileInputStream("sequence/2.md"));

        // 如果通过 ArrayList 获取 Enumeration，通过 Collections 工具类
        Enumeration<FileInputStream> enumeration = Collections.enumeration(arrayList);

        // 创建序列流对象，需要 Enumeration
        SequenceInputStream sequenceInputStream = new SequenceInputStream(enumeration);

        // 创建目的
        FileOutputStream fos = new FileOutputStream("sequence/3.md");
        int len;
        byte[] buff = new byte[1024];
        while ((len = sequenceInputStream.read(buff)) != -1) {
            fos.write(buff,0, len);
        }

        // 关闭流
        fos.close();
        sequenceInputStream.close();
    }
}
