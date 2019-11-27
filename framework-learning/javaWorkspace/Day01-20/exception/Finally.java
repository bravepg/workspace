public class Finally {
    public static void main(String[] args) {
        
        try {
            int num =  4 / 0;
            System.out.println(num);
        } catch (Exception e) {
            // System.exit(0); 只有这种情况 finally 也不会执行
            throw new RuntimeException();
        } finally {
            System.out.println("测试");
        }
    }
}