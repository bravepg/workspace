package day25.cn.leo.udp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.SocketException;

public class ChatRoom {

    /**
     * 一个程序如果既能接收又可以发送
     * 想到使用多线程
     * @param args
     */
    public static void main(String[] args) throws SocketException {
        DatagramSocket datagramSocketSend = new DatagramSocket(8888);
        DatagramSocket datagramSocketReceive = new DatagramSocket(10001);

        new Thread(new Send(datagramSocketSend)).start();
        new Thread(new Receive(datagramSocketReceive)).start();
    }
}

class Send implements Runnable {
    private DatagramSocket datagramSocket;

    Send(DatagramSocket datagramSocket) {
        this.datagramSocket = datagramSocket;
    }

    @Override
    public void run() {
        // 发送的数据源来自键盘录入
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        String line;
        while (true) {
            try {
                if ((line = bufferedReader.readLine()) != null) {
                    byte[] buff = line.getBytes();
                    DatagramPacket datagramPacket = new DatagramPacket(buff, buff.length, InetAddress.getByName("192.168.125.3"), 10001);
                    datagramSocket.send(datagramPacket);
                    if ("over".equals(line)) {
                        break;
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}

class Receive implements Runnable {
    private DatagramSocket datagramSocket;

    Receive(DatagramSocket datagramSocket) {
        this.datagramSocket = datagramSocket;
    }

    @Override
    public void run() {
        while (true) {
            byte[] buff = new byte[1024];
            DatagramPacket datagramPacket = new DatagramPacket(buff, buff.length);
            try {
                datagramSocket.receive(datagramPacket);
            } catch (IOException e) {
                e.printStackTrace();
            }
            String ip = datagramPacket.getAddress().getHostAddress();
            String data = new String(datagramPacket.getData(), 0, datagramPacket.getLength());
            System.out.println(ip + " --- " + data);
            if ("over".equals(data)) {
                System.out.println(ip + "离开了聊天室");
            }
        }
    }
}