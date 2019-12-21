package day25.cn.leo.upload;

import java.io.*;
import java.net.Socket;

public class UploadClient {

    public static void main(String[] args) throws IOException {
        System.out.println("上传文本客户端启动了...");
        // 1. 创建客户端
        Socket socket = new Socket("192.168.125.3", 10010);

        // 2. 创建输入流并关联源文件
        // FileInputStream fileInputStream = new FileInputStream("student.md");
        BufferedReader bufferedReader = new BufferedReader(new FileReader("client.md"));

        // 3. 获取 socket 流中的输入流
        // 高效写法
        // BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
        PrintWriter printWriter = new PrintWriter(socket.getOutputStream(), true);

        String line;
        while ((line = bufferedReader.readLine()) != null) {
            printWriter.println(line);
        }
        // 给服务端发送标记
        // printWriter.println("over"); 这种方式容易跟文本中的内容重复
        socket.shutdownOutput();

        // 4. 通过 socket 流读取服务端返回的数据
        BufferedReader buffIn = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String lineIn = buffIn.readLine();
        System.out.println(lineIn);

        // 5. 关闭流
        bufferedReader.close();
        socket.close();
    }
}
