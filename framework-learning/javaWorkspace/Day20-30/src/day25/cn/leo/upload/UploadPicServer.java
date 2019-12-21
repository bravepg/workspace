package day25.cn.leo.upload;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class UploadPicServer {

    public static void main(String[] args) throws IOException {
        System.out.println("图片上传服务端启动了...");
        ServerSocket serverSocket = new ServerSocket(10020);

        // while 循环始终保持服务端启动
        // serverSocket 也不用关闭
        // 那么如何实现并发处理呢？即多个客户端同时连上
        // 通过多线程
        while (true) {
            Socket socket = serverSocket.accept();
            new Thread(new UploadPic(socket)).start();
        }

        // serverSocket.close();
    }
}

class UploadPic implements Runnable {
    private Socket socket;

    UploadPic(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        InputStream ips;
        try {
            ips = socket.getInputStream();
            String ip = socket.getInetAddress().getHostAddress();

            File file = getFile(ip);
            FileOutputStream fos = new FileOutputStream(file);

            int len;
            byte[] buff = new byte[2048];
            while ((len = ips.read(buff)) != -1) {
                fos.write(buff, 0, len);
            }

            OutputStream ops = socket.getOutputStream();
            ops.write("图片上传成功".getBytes());

            fos.close();
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public File getFile(String ip) {
        File dir = new File("server");
        if (!dir.exists()) {
            dir.mkdir();
        }
        int count = 1;
        File file = new File(dir, ip + "---" + count + "---1.jpg");
        while (file.exists()) {
            count++;
            file = new File(dir, ip + "---" + count + "---1.jpg");
        }
        return file;
    }
}
