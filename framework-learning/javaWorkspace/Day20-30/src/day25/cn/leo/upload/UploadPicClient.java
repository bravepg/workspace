package day25.cn.leo.upload;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

public class UploadPicClient {
    public static void main(String[] args) throws IOException {
        System.out.println("上传图片客户端启动了...");

        Socket socket = new Socket("192.168.125.3", 10020);

        FileInputStream fis = new FileInputStream("picture.jpg");

        OutputStream ops = socket.getOutputStream();

        byte[] buff = new byte[1024];
        int len;
        while ((len = fis.read(buff)) != -1) {
            ops.write(buff, 0, len);
        }

        // 客户端发送结束标记
        socket.shutdownOutput();

        // 获取服务端返回的数据
        InputStream ips = socket.getInputStream();
        byte[] buffIn = new byte[1024];
        int lenIn = ips.read(buffIn);
        System.out.println(new String(buffIn, 0, lenIn));

        fis.close();
        socket.close();
    }
}
