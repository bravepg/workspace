package day22.cn.leo.copy;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class CopyByBuffer {

    public static void main(String[] args) {

        copyByBuffer();
    }

    private static void copyByBuffer() {
        FileInputStream fis = null;
        FileOutputStream fos = null;

        try {
            fis = new FileInputStream("README.md");
            fos = new FileOutputStream("template/README_BUFFER.md");

            byte[] buffer = new byte[1024];
            int len = 0;
            while ((len = fis.read(buffer)) != -1) {
                fos.write(buffer, 0, len);
            }
        } catch (IOException e) {
            // 日志
            e.printStackTrace();
        } finally {
            if (fis != null) {
                try {
                    fis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (fos != null) {
                try {
                    fos.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
