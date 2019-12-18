package day24.cn.leo.pipe;

import java.io.IOException;
import java.io.PipedInputStream;
import java.io.PipedOutputStream;

public class PipeStreamDemo {

    /**
     * 读取管道和输入管道可以连接
     * 单线程容易死锁——键盘录入
     *
     * 多用于网络编程中
     * @param args
     */
    public static void main(String[] args) throws IOException {
        PipedInputStream pis = new PipedInputStream();
        PipedOutputStream pos = new PipedOutputStream();
        pis.connect(pos);

        new Thread(new Input(pis)).start();
        new Thread(new Output(pos)).start();
    }
}

class Input implements Runnable {
    private PipedInputStream pis;

    public Input(PipedInputStream pis) {
        this.pis = pis;
    }

    @Override
    public void run() {
        byte[] buff = new byte[1024];
        int len = 0;
        try {
            len = pis.read(buff);
            pis.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        String str = new String(buff, 0, len);
        System.out.println(str);
    }
}

class Output implements Runnable {
    private PipedOutputStream pos;

    public Output(PipedOutputStream pos) {
        this.pos = pos;
    }

    @Override
    public void run() {
        try {
            pos.write("管道流".getBytes());
            pos.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
