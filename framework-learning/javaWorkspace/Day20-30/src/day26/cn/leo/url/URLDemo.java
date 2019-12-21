package day26.cn.leo.url;


import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;

public class URLDemo {

    public static void main(String[] args) throws IOException {

        String url_str = "http://192.168.125.3:8080/myweb/2.html?name=li";

        URL url = new URL(url_str);

        System.out.println(url.getProtocol());
        System.out.println(url.getHost());
        System.out.println(url.getPort());
        System.out.println(url.getPath());
        System.out.println(url.getQuery());

        // 通过 openConnection 获取远程资源的连接对象
        // 会解析 http 应答头，不显示 http 应答头
        URLConnection conn = url.openConnection();
        // 调用连接对象，准备读取资源
        InputStream in = conn.getInputStream();
        byte[] buff = new byte[2048];
        int len = in.read(buff);
        System.out.println(new String(buff, 0, len));
    }
}
