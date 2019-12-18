package day22.cn.leo.buffer;

import java.io.*;

/**
 * 为了提高读写的效率而设计的
 *
 * 之前的 FileOutputStream FileInputStream 都是从设备上读写数据
 * 而缓冲流相当于只需要从缓冲区读写数据
 *
 * 设备的的数据是一批批进行写入或者输出
 */
public class BufferStreamDemo {

    public static void main(String[] args) throws IOException {

        copyTextByBuffer();
    }

    private static void copyTextByBuffer() throws IOException {

        FileInputStream fis = new FileInputStream("README.md");
        FileOutputStream fos = new FileOutputStream("template/README.md");

        BufferedInputStream buf_fis = new BufferedInputStream(fis);
        BufferedOutputStream buf_fos = new BufferedOutputStream(fos);

        // 无论是之前的字节变量 byte b，还是现在的字节数组 byte[] b
        // 都是中转变量
        byte[] b = new byte[1024];
        int len;

        while ((len = buf_fis.read(b)) != -1) {
            buf_fos.write(b, 0, len);
            // 刷新缓冲区的流，将缓冲区的流强制写入设备
            // 如果不强制刷新，当写入的流大于缓冲区的长度是会自动刷新
            buf_fos.flush();
        }

        fis.close(); // buf_fis.close(); 也是起到相同的效果
        fos.close();
    }
}
