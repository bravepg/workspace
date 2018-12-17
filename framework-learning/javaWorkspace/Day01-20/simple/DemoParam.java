class DemoParam {
    int x = 6;  // 显示初始化
    public static void main(String[] args) {
        Demo d = new Demo();
        d.x = 8;
        show(d);
        System.out.println(d.x);   // 7
    }
    public static void show(Demo d) {
        d = new Demo();
        d.x = 7;
    }
}