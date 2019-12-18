package day24.cn.leo.object;

import day24.cn.leo.domain.Person;

import java.io.*;

/**
 * 功能: 操作对象
 * 出现的目的
 *  为了将对象进行持久化
 */
public class ObjectStreamDemo {
    /**
     * 将对象进行序列化
     * @param args
     */
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        // writeObject(); // 对象的序列化——写入
        readObject(); // 对象的反序列化——读取
    }

    private static void readObject() throws IOException, ClassNotFoundException {
        // 定义流对象关联文件
        FileInputStream fis = new FileInputStream("obj.object");
        // 建立用于读取对象的功能对象
        ObjectInputStream ois = new ObjectInputStream(fis);

        Person obj = (Person)ois.readObject();

        System.out.println(obj.toString());
    }

    /**
     * 将对象持久化
     */
    private static void writeObject() throws IOException {
        // 明确存储对象的文件，一般以 .object 结尾
        FileOutputStream fos = new FileOutputStream("obj.object");
        // 给操作文件对象加入写入对象功能
        ObjectOutputStream oos = new ObjectOutputStream(fos);

        oos.writeObject(new cn.leo.domain.Person("gao", 23));
        oos.close();
    }
}
