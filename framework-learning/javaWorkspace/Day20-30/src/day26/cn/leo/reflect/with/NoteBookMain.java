package day26.cn.leo.reflect.with;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class NoteBookMain {
    public static void main(String[] args) throws IOException, ClassNotFoundException, IllegalAccessException, InstantiationException {
        NoteBook noteBook = new NoteBook();
        noteBook.run();
        noteBook.use(null);

        // 因为有了鼠标，所以需要在源程序中创建鼠标对象并传递给笔记本
        // 希望后期出现设备以后，可不可以不用修改 Main 的代码，还可以不断加入新的设备
        // noteBook.use(new MouseByUSB());

        // 通过反射来解决
        // 对外提供配置文件
        File usbConfigFile = new File("usb.properties");
        if (!usbConfigFile.exists()) {
            usbConfigFile.createNewFile();
        }

        // 读取流和配置文件相关联
        Properties properties = new Properties();
        FileInputStream fis = new FileInputStream(usbConfigFile);
        properties.load(fis);
        for (int x = 1; x <= properties.size(); x++) {
            String className = properties.getProperty("usb" + x);
            Class cls = Class.forName(className);
            // 对指定对类进行加载
            USB usb = (USB)cls.newInstance();
            noteBook.use(usb);
        }
    }
}
