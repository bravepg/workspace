package day25.cn.leo.tcp;

import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class TCPServer {

    /**
     * 创建 tcp 服务端
     *
     * 1. 创建 socket 服务端服务，服务端为了让客户端可以连上，必须提供一个端口
     * 2. 获取客户端对象，通过客户端的 socket 流和对应的客户端进行通信
     * 3. 获取客户端的 socket 流的读取流
     * 4. 读取数据并显示在服务端
     * 5. 关闭资源
     * @param args
     */
    public static void main(String[] args) throws IOException {
        System.out.println("服务端启动了...");

        // 1. 创建 socket 服务端
        ServerSocket serverSocket = new ServerSocket(10003);
        // 2. 获取客户端对象
        Socket socket = serverSocket.accept(); // 阻塞式方法
        // 3. 通过客户端对象获取 socket 流的读取流
        InputStream inputStream = socket.getInputStream();
        // 4. 读取数据
        byte[] buff = new byte[1024];
        int len = inputStream.read(buff);
        String str = new String(buff, 0, len);
        String ip = socket.getInetAddress().getHostAddress();
        System.out.println(ip + " .... connected");
        System.out.println(str);

        socket.close();
        serverSocket.close();
    }
}
