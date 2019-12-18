package day23.cn.leo.properties;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

public class PropertiesDemo {

    public static void main(String[] args) throws IOException {
        Properties properties = new Properties();

        properties.setProperty("gao", "23");
        properties.setProperty("li", "22");

        // Set<String> set = properties.stringPropertyNames();
        // for (String key: set) {
        //     String value = properties.getProperty(key);
        //     System.out.println(key + " --- " + value);
        // }

        // 该方法专门为调试使用
        // properties.list(System.out);

        // 将集合中的数据持久化存储到设备上
        // 需要输出流
        // properties 文件是 java 中也有的配置文件，但是只支持简单数据类型
        // 对于复杂数据类型，使用 xml 文件，xml 在其他语言中也适用，是一种标准的数据交换格式
        // 一般当不确定的文件需要进行持久化存储时需要使用配置文件
        FileOutputStream fos = new FileOutputStream("demo.properties");
        properties.store(fos, "properties demo");

        fos.close();

        modifyProperties();
    }

    /**
     * 修改配置文件
     */
    private static void modifyProperties() throws IOException {
        Properties properties = new Properties();
        // 创建输入流关联源文件
        FileInputStream fis = new FileInputStream("demo.properties");
        properties.load(fis);

        properties.setProperty("gao", "24");

        // 写回源文件
        FileOutputStream fos = new FileOutputStream("demo.properties");
        properties.store(fos, "properties demo");

        // 关闭资源
        fis.close();
        fos.close();
        // properties.list(System.out);
    }


}
