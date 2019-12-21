package day25.cn.leo.tcp;

import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;

public class TCPClient {

    /**
     * tcp 客户端的建立
     *
     * 1. 建立 tcp 客户端服务
     *  1.1 因为是面向连接的，必须有连接才可以进行通信
     *  1.2 在创建客户端的时候，就必须明确目的地址和端口
     *
     * 2. 一旦建立连接，就有了数据传输的通道。就是可以在通道中传输数据
     * 这个传输其实就是通过流实现的，叫做 socket io 流
     *
     * 3. 只要获取 socket io 中的写动作就可以将数据写到 socket 流中发送给服务端
     * 4. 关闭资源
     * @param args
     */
    public static void main(String[] args) throws IOException {
        System.out.println("客户端启动...");

        // 1. 创建客户端对象，明确目的地址和端口
        Socket socket = new Socket("192.168.125.3", 10003);
        // 2. 获取 socket 中的输出流
        OutputStream ops = socket.getOutputStream();
        // 3.  调用输出流的 write 方法，将数据发送给服务端
        ops.write("TCP 来了...".getBytes());
        // 4. 关闭资源
        socket.close();
    }
}
