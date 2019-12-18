package day21.cn.leo.file;

import java.io.File;

public class FileDemo {

    public static void main(String[] args) {

        // 将一个具体的路径封装成 File 对象，可以封装存在的文件或目录，也可以封装不存在的文件或目录

        File file = new File("c:/README.md");
        System.out.println(file);

        // 封装文件夹
        // File dir = new File("c:/");

        // 由于不同系统的文件分割路径不同，因此可以使用 File 类自带的属性进行描述
        // File comFile = new File("c:" + File.separator + "README.txt");/**/
    }
}
