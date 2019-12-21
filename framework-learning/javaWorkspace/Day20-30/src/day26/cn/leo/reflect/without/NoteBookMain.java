package day26.cn.leo.reflect.without;

public class NoteBookMain {
    public static void main(String[] args) {
        NoteBook noteBook = new NoteBook();
        noteBook.run();
        noteBook.use(null);

        // 因为有了鼠标，所以需要在源程序中创建鼠标对象并传递给笔记本
        // 希望后期出现设备以后，可不可以不用修改 Main 的代码，还可以不断加入新的设备
        noteBook.use(new MouseByUSB());
    }
}
