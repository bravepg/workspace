class DemoCharacter {
    public static void main(String[] args) {
        short s = 4;
        // s += 5; 
        // s = s + 5; 
        char c = 'a';
        c = (char)(c + 1);
        System.out.println(c + "," + s + (char)(c + 1));
    }
}