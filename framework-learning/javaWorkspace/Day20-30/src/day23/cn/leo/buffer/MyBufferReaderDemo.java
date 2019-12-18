package day23.cn.leo.buffer;

import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;

public class MyBufferReaderDemo {

    public static void main(String[] args) throws IOException {
        FileReader fr = new FileReader("README.md");
        MyBufferReader myBufferReader = new MyBufferReader(fr);
        String line;
        while ((line = myBufferReader.myReadLine()) != null) {
            System.out.println(line);
        }

        // MyLineNumberReader myLineNumberReader = new MyLineNumberReader(fr);
        // String lineNumber;
        // while ((lineNumber = myLineNumberReader.myReadLine()) != null) {
        //     System.out.println(myLineNumberReader.getLineNumber() + " --- " + lineNumber);
        // }


        // window 系统下换行符 \r\n
        // mac 系统下换行符 \n
        // unix 系统下换行符 \r
        // BufferedReader bufferedReader = new BufferedReader(fr);
        // System.out.println((char)bufferedReader.read());
        // System.out.println((char)bufferedReader.read());
        // System.out.println((char)bufferedReader.read());
        // System.out.println((char)bufferedReader.read());
        // System.out.println((char)bufferedReader.read()); // \r 算一个字符
        // System.out.println((char)bufferedReader.read());
        // System.out.println((char)bufferedReader.read());

        FileInputStream fis = new FileInputStream("README.md");

        System.out.println((char)fis.read());
        System.out.println((char)fis.read());
        System.out.println((char)fis.read());
        System.out.println((char)fis.read());
        System.out.println((char)fis.read());
        System.out.println((char)fis.read());
    }
}
