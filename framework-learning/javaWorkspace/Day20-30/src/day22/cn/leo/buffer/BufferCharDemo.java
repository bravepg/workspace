package day22.cn.leo.buffer;

import java.io.*;

public class BufferCharDemo {

    public static void main(String[] args) throws IOException {

        readCNTextByBuffer();
        writeCNTextByBuffer();
    }

    private static void readCNTextByBuffer() throws IOException {
        FileReader fr = new FileReader("template/README_CHAR.md");

        BufferedReader bufferedReader = new BufferedReader(fr);

        String line;
        while ((line = bufferedReader.readLine()) != null) {
            System.out.println(line);
        }

        // 读取键盘录入
        // BufferedReader(InputStreamReader(System.in))
    }

    private static void writeCNTextByBuffer() throws IOException {

        // 声明输出流，关联目的地
        FileWriter fw = new FileWriter("template/README_CHAR.md");

        // 创建缓冲区对象，明确要缓冲的流对象
        BufferedWriter bufferedWriter = new BufferedWriter(fw);

        bufferedWriter.write("hello");
        bufferedWriter.newLine();  // 就相当于 System.getProperty("line.separator"); 但是在字符流中把它封装了，原因是文本中经常见到换行，但是其他图像等文件不常见到
        bufferedWriter.write("world");

        bufferedWriter.close(); // 只需要关 fw 或者 bufferedWriter
    }
}
