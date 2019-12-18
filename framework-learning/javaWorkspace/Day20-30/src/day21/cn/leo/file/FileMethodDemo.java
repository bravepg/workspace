package day21.cn.leo.file;

import day21.cn.leo.fliter.FilterBySuffix;

import java.io.File;
import java.io.IOException;

public class FileMethodDemo {

    public static void main(String[] args) throws IOException {
        /**
         * File 类，常见方法
         * 1. 名字，获取名称
         * 2. 大小，获取大小
         * 3. 获取类型————不存在该方法
         * 4. 获取所在目录
         *
         * 5. getFreeSpace
         * 6. 获取指定文件夹中的所有文件和文件夹的名称。能不能只获取 .java 文件呢
         */
        File file = new File("c:/abc/README.md");
        String fileName = file.getName();
        System.out.println(fileName);

        long len = file.length();
        System.out.println(len);

        System.out.println(file.getParent());
        System.out.println(file.getAbsolutePath()); // 获取文件的绝对路径

        System.out.println(file.lastModified()); // 获取文件的最后修改时间


        File file2 = new File("README.md");
        createMethod(file2);
        deleteMethod(file2);

        File dir = new File("template/bb");
        createDir(dir);
        deleteDir(dir);

        listFiles();
    }

    public static void createMethod(File file) throws IOException {
        boolean b = file.createNewFile(); // 如果文件存在，则不创建，返回 false，不存在就创建，成功返回 true
        System.out.println(b);
    }

    /**
     * 删除
     * 系统文件或者文件被使用时 删除失败
     * 在删除文件夹的时候，必须保证文件夹下面的内容为空 不然删除失败
     * @param file
     * @throws IOException
     */
    public static void deleteMethod(File file) throws IOException {
        boolean b = file.delete();
        System.out.println(b);
    }

    /**
     * mkdir 无法创建多级文件夹
     * 创建多级文件夹使用 mkdirs
     * @param file
     */
    public static void createDir(File file) {

        boolean b = file.mkdirs();
        System.out.println("mkdirs--" + b);
    }

    public static void deleteDir(File file) {
        boolean b = file.delete();
        System.out.println("delete dir--" + b);
    }

    public static void listFiles() {
        File file = new File("src/day21/cn/leo/file");
        System.out.println(file.getAbsolutePath());


        /**
         * 在这个地方，endsWith 如果希望以其他不同的文件来结尾，就要修改源程序
         * 主要原因就是文件的遍历功能和比较功能耦合的比较深
         *
         * 因此产生了一个解耦的思想
         *
         * if (str.endsWith(".java")) { // 类似比较器，策略模式
         *     System.out.println(str);
         * }
         *
         * 而解耦的关键在于 文件的遍历功能 和 比较功能耦合
         */

        // String[] list = file.list(); // 只能获取文件和文件夹的名称
        // if (list != null) {
        //     for (String str: list) {
        //         if (str.endsWith(".java")) {
        //             System.out.println(str);
        //         }
        //     }
        // }
        /**
         * list 方法恰恰提供了这样的参数
         * list(FilenameFilter filter)
         *
         * 这样只需要面对 FilenameFilter 接口编程而不再面对具体的实现编程
         *
         * 比较器也是这样的思想，在 Java 编程模式中又可以叫做策略模式
         */
        String[] strings = file.list(new FilterBySuffix(".java"));
        if (strings != null) {
            for (String str: strings) {
                System.out.println(str);
            }
        }

        File[] files = file.listFiles();
        if (files != null) {
            for (File f: files) {
                System.out.println(f.getName() + " ==== " + f.length());
            }
        }
    }
}
