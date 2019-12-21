package day25.cn.leo.ip;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class IPDemo {

    public static void main(String[] args) throws UnknownHostException {

        InetAddress address = InetAddress.getLocalHost();

        System.out.println(address);

        // 获取其他主机的信息
        address = InetAddress.getByName("www.google.com");
        System.out.println(address.getHostName() + " --- " + address.getHostAddress());
    }
}
