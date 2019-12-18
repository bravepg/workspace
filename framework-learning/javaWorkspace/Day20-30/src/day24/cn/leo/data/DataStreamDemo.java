package day24.cn.leo.data;

import java.io.*;

public class DataStreamDemo {
    public static void main(String[] args) throws IOException {

        writeData();
        readData();
    }

    private static void writeData() throws IOException {
        FileOutputStream fos = new FileOutputStream("data.data");
        DataOutputStream dos = new DataOutputStream(fos);

        dos.writeBoolean(true);
        dos.close();
    }
    private static void readData() throws IOException {
        FileInputStream fis = new FileInputStream("data.data");
        DataInputStream dis = new DataInputStream(fis);

        boolean b = dis.readBoolean();
        System.out.println(b);
    }
}
