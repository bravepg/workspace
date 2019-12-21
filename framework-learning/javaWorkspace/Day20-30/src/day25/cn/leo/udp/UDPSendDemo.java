package day25.cn.leo.udp;

import java.io.IOException;
import java.net.*;

public class UDPSendDemo {

    /**
     * 建立 udp 的发送端
     * 1. 建立可以实现 udp 传输的 socket 服务
     * 2. 明确具体发送的数据
     * 3. 通过 socket 服务将具体的数据发送出去
     * 4. 关闭服务
     * @param args
     */
    public static void main(String[] args) throws IOException {
        System.out.println("UDP 发送端启动...");

        // 1. 创建 udp 服务
        DatagramSocket datagramSocket = new DatagramSocket();
        // 2. 明确要发送的数据
        String string = "UDP 发送数据了";
        // 发送数据，将数据封装到数据包中
        byte[] buff = string.getBytes();
        datagramSocket.send(new DatagramPacket(buff, buff.length, InetAddress.getByName("192.168.125.3"), 10000));

        datagramSocket.close();
    }
}
