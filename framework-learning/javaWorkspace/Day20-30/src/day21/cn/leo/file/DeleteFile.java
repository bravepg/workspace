package day21.cn.leo.file;

import java.io.File;

public class DeleteFile {

    public static void main(String[] args) {
        deleteFile(new File("src/demo"));
    }

    public static void deleteFile(File dir) {
        File[] files = dir.listFiles();

        /**
         * if (files.length == 0) {
         *    dir.delete();
         * }
         *
         * 最开始自己写的删除文件夹的思想是错误的，因为如果文件夹不为空 则不走这段逻辑
         *
         * 正确的是在删除文件后，直接删除所在文件夹
         */
        for (File file: files) {
            if (file.isDirectory()) {
                deleteFile(file);
            } else {
                file.delete();
            }
        }
        dir.delete();
    }
}
