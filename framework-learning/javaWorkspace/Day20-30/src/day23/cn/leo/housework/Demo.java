package day23.cn.leo.housework;

import java.io.*;

public class Demo {
    /**
     * 通过键盘录入数据，将数据保存到文件
     * 明确一
     *  源：InputStream Reader
     *  目的：OutputStream Writer
     *
     * 明确二：是纯文本文件吗
     *  源：Reader
     *  目的：Writer
     *
     * 明确三：具体设备
     *  源：System.in
     *  目的：硬盘
     *
     * 明确四：需要高效吗
     *  源：BufferedReader
     *  目的：BufferedWriter
     * @param args
     */
    public static void main(String[] args) throws IOException {
        keyboardToFile();
    }

    private static void keyboardToFile() throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("housework/demo.md")));
        // BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));


        String line;
        while ((line = bufferedReader.readLine()) != null) {
            if (line.equals("over")) {
                break;
            }
            bufferedWriter.write(line);
            bufferedWriter.newLine();
            bufferedWriter.flush();
        }
        bufferedReader.close();
        bufferedWriter.close();
    }
}
