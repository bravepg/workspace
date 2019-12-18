package day24.cn.leo.random;

import java.io.IOException;
import java.io.RandomAccessFile;

public class RandomAccessFileDemo {

    /**
     * 1. 只能操作文件
     * 2. 既能读又能写
     * 3. 维护了一个 byte 数组
     * 4. 通过对指针的操作可以实现对文件任意位置的读取和写入
     *
     * 常用场景：多线程操作文件（下载文件）
     * @param args
     */
    public static void main(String[] args) throws IOException {

        // writeFile();
        readFile();
    }

    private static void readFile() throws IOException {
        RandomAccessFile randomAccessFile = new RandomAccessFile("random.md", "r");

        // 实现任意位置读取
        randomAccessFile.seek(7);
        byte[] buff = new byte[3];
        randomAccessFile.read(buff);

        String name = new String(buff);
        int age = randomAccessFile.readInt();

        System.out.println(name + " --- " + age);
    }

    private static void writeFile() throws IOException {
        // 创建一个随机访问文件的对象
        // 文件不存在时则创建，存在时不创建也不覆盖
        RandomAccessFile randomAccessFile = new RandomAccessFile("random.md", "rw");

        randomAccessFile.write("高".getBytes());
        randomAccessFile.writeInt(97); // 保证整数的字节原样性 （PrintStream 保证数值的表现形式）

        // 随机写入
        randomAccessFile.seek(7);
        randomAccessFile.write("李".getBytes());
        randomAccessFile.writeInt(99);
        System.out.println(randomAccessFile.getFilePointer());

        randomAccessFile.close();
    }
}
