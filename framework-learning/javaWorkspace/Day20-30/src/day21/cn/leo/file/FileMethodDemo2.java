package day21.cn.leo.file;

import java.io.File;

public class FileMethodDemo2 {

    public static void main(String[] args) {
        File file = new File("src");
        getAllFiles(file);
    }

    /**
     * 获取目录下的所有文件（包括子目录）
     * @param dir 被遍历的文件夹
     *
     * 递归：函数自身调用自身
     * 什么时候使用？
     *   当某个功能被重复使用并且只有参与运算的数据不同时，可以考虑使用递归
     *
     * 使用时一定要定义条件
     */
    public static void getAllFiles(File dir) {
        System.out.println("dir --- " + dir);

        File[] files = dir.listFiles();
        if (files != null) {
            for (File file: files) {
                if (file.isDirectory()) {
                    getAllFiles(file);
                } else {
                    System.out.println("file --- " + file);
                }
            }
        }
    }
}
