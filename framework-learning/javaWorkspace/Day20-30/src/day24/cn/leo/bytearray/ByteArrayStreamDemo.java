package day24.cn.leo.bytearray;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;

public class ByteArrayStreamDemo {
    /**
     * 该流的关闭是无效的：关闭后仍可以使用
     * 因为没有涉及到系统资源，都是在内存中进行操作
     * 不需要向设备进行读写
     * @param args
     */
    public static void main(String[] args) {
        // 用 io 的思想操作数组
        // 确定源
        ByteArrayInputStream bis = new ByteArrayInputStream("abc".getBytes());
        // 确定目的(内部维护了可变长度的数组)
        ByteArrayOutputStream bos = new ByteArrayOutputStream();

        int by;
        while ((by = bis.read()) != -1) {
            bos.write(by);
        }

        // 相当于在数组上面做了一层封装
        // 在操作的时候不需要在考虑数组的角标
        // 直接面对读写方法即可
        System.out.println(bos.toString());
    }
}
