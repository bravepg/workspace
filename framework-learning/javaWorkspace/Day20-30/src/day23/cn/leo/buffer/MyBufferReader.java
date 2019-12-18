package day23.cn.leo.buffer;

import java.io.IOException;
import java.io.Reader;

public class MyBufferReader {
    // 明确被缓冲的流对象，在创建的时候就明确
    private Reader reader;
    // 建立缓冲区
    char[] buffer = new char[1024];
    // 当前缓冲的数量
    private int count;
    // 当前缓冲区的索引
    private int index;

    public MyBufferReader(Reader reader) {
        this.reader = reader;
    }

    /**
     * 读取一个字符
     * @return
     * @throws IOException
     */
    public int myRead() throws IOException {
        // 当 count = 0 时 从流对象中获取字符数据
        if (count == 0) {
            count = reader.read(buffer);
            index = 0;
        }
        if (count < 0) {
            return -1;
        }
        char ch = buffer[index];
        index++; // 每次获取完 索引自增
        count--; // 每次获取完 总量自减
        return ch;
    }

    public String myReadLine() throws IOException {
        // 定义一个临时缓冲区
        StringBuilder stringBuilder = new StringBuilder();
        int ch;
        while ((ch = myRead()) != -1) {
            if ((char)ch == '\r') {
                continue;
            }
            if ((char)ch == '\n') {
                return stringBuilder.toString();
            }
            // 对读到的字符串进行临时存储
            stringBuilder.append((char)ch);
        }
        // 如果文本结尾处有数据，但没有行结束符
        // 数据已经被读到，判断 stringBuilder 长度即可
        if (stringBuilder.length() != 0) {
            System.out.println("末尾是换行符");
            return stringBuilder.toString();
        }
        return null;
    }
}
