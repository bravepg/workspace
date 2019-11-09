package cn.leo.param;

public class ParamDemo {

    public static void main(String[] args) {

        // 简化操作，不需要再定义数组
        // 编译器识别，再生成 class 文件的时候会自动生成数组
        System.out.println(add(1, 2, 3, 4));
    }

    /**
     * 可变参数只能定义在参数列表的最后
     * 跟 javascript 的特性相似
     * @param arr
     * @return
     */
    public static int add(int... arr) {

        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
}
