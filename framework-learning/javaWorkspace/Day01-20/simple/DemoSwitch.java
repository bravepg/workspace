class DemoSwitch {
    public static void main(String[] args) {
        int num = 25;
        // switch (num) {
        //     // 不支持变量
        //     case num:
        //         System.out.println("Less than 0");
        //         break;
        //     // 不支持表达式
        //     case num >= 0 && num <= 10:
        //         System.out.println("Between 0 and 10");
        //         break;
        //     default:
        //         System.out.println("More than 10");
        // }
        switch (num) {
            // 支持常量表达式
            case 4 + 21:
                System.out.println("Less than 0");
                break;
            default:
                System.out.println("More than 10");
        }
    }
}