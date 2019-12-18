package day23.cn.leo.properties;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

public class PropertiesDemo2 {

    /**
     * 定一个功能，程序使用 5 次后，提示请输入注册码
     *
     * 思路
     *  1. 需要计数器
     *  2. 计数器的生命周期比程序要长，可以存储在持久化设备上
     *  3. 存储的方式是键值对 -> map 集合，并且可以读写 -> io 技术
     *
     *      map + io = properties
     * @param args
     */
    public static void main(String[] args) throws IOException {
        if(checkCount()) {
            run();
        }
    }

    private static boolean checkCount() throws IOException {
        boolean isRun = true;
        int count = 0; // 软件运行次数
        // 创建源文件
        File file = new File("count.properties");
        if (!file.exists()) {
            file.createNewFile();
        }
        // 创建文件读取流关联源文件
        FileInputStream fis = new FileInputStream(file);
        // 创建集合加载数据流
        Properties properties = new Properties();
        properties.load(fis);

        String value = properties.getProperty("count");
        if (value != null) {
            count = Integer.parseInt(value);
            if (count >= 5) {
                System.out.println("软件运行次数已到");
                isRun = false;
            }
        }
        count++;
        properties.setProperty("count", Integer.toString(count));

        // 创建文件输出流更新配置文件
        FileOutputStream fos = new FileOutputStream(file);
        // FileOutputStream fos = new FileOutputStream(file);
        properties.store(fos, "");
        fis.close();
        fos.close();
        return isRun;
    }

    public static void run() {
        System.out.println("软件运行");
    }
}
