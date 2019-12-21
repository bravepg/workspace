package day25.cn.leo.upload;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class UploadServer {

    public static void main(String[] args) throws IOException {

        System.out.println("上传文本服务端启动...");

        ServerSocket serverSocket = new ServerSocket(10010);

        Socket socket = serverSocket.accept();
        String ip = socket.getInetAddress().getHostAddress();
        System.out.println(ip + " .... connected");

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));

        PrintWriter printWriter = new PrintWriter(new FileWriter("server.md"), true);

        String line;
        while ((line = bufferedReader.readLine()) != null) {
            // 定义结束标记 但是容器重复
            // 可以使用 socket.shutdownOutput();
            // if ("over".equals(line)) {
            //     break;
            // }
            printWriter.println(line);
        }

        // 给客户端返回信息
        PrintWriter printWriterIn = new PrintWriter(socket.getOutputStream(), true);
        printWriterIn.println("上传成功");

        printWriter.close();
        socket.close();
        serverSocket.close();
    }
}
