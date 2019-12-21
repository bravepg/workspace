package day25.cn.leo.udp;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;

public class UDPReceiveDemo {

    /**
     * 创建 udp 接收端
     *
     * 1. 创建一个 socket 服务，明确端口
     * 2. 接收数据
     * 3. 将其中所需要的数据取出来
     * 4. 关闭服务
     * @param args
     */
    public static void main(String[] args) throws IOException {
        System.out.println("UDP 接收端启动了...");

        // 1. 创建 socket 服务
        DatagramSocket datagramSocket = new DatagramSocket(10000);
        // 2. 使用 socket 接收数据，需要将收到的数据存储到数据包中
        // 可以通过数据包对象的方法对收到的数据进行解析
        byte[] buff = new byte[1024];
        DatagramPacket datagramPacket = new DatagramPacket(buff, buff.length);
        datagramSocket.receive(datagramPacket); // receive 是阻塞式方法
        // 3. 将数据取出来
        String ip = datagramPacket.getAddress().getHostAddress();
        int port = datagramPacket.getPort();
        String data = new String(datagramPacket.getData(), 0, datagramPacket.getLength());
        System.out.println(ip + " --- " + port + " --- " + data);

        // 4. 关闭服务
        datagramSocket.close();
    }
}
