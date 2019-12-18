package day24.cn.leo.print;

import java.io.*;

public class PrintWriterDemo {
    public static void main(String[] args) throws IOException {

        PrintWriter pw = new PrintWriter("print.md");
        pw.write(353); // 一次写入两个字节
        pw.close();


        keyBoardToScreen();
    }

    /**
     * 读取键盘录入，展示在屏幕上
     * @throws IOException
     */
    private static void keyBoardToScreen() throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        // BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));
        // 简单写法
        // PrintWriter pw = new PrintWriter(System.out);
        PrintWriter pw = new PrintWriter(System.out, true);

        // 如果想写入文件并且自动刷新
        // PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter("1.demo")), true);

        String line;
        // readLine 是阻塞线程的
        while ((line = bufferedReader.readLine()) != null) {
            if (line.equals("over")) {
                break;
            }
            pw.println(line.toUpperCase());
            // pw.flush(); autoFlush 为 true 时，会自动刷新
        }
        pw.close();
    }
}
