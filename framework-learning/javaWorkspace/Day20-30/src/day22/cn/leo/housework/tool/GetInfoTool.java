package day22.cn.leo.housework.tool;

import day22.cn.leo.housework.domain.Student;

import java.io.*;
import java.util.Comparator;
import java.util.Set;
import java.util.TreeSet;

public class GetInfoTool {
    /**
     * 按照自然排序的比较器
     * @return
     * @throws IOException
     */
    public static Set<Student> getStudents() throws IOException {
        return getStudents(null);
    }

    /**
     * 按照自定义排序的比较器
     * @return
     * @throws IOException
     */
    public static Set<Student> getStudents(Comparator comparator) throws IOException {
        // 键盘录入
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        // 创建集合，存储学生信息
        Set<Student> set;
        if (comparator != null) {
            set = new TreeSet<>(comparator);
        } else {
            set = new TreeSet<>();
        }

        String line;
        while ((line = bufferedReader.readLine()) != null) {
            // 键盘录入加入结束标记
            if (line.equals("over")) {
                break;
            }
            String[] strings = line.split(",");
            Student student = new Student(strings[0], Integer.parseInt(strings[1]), Integer.parseInt(strings[2]), Integer.parseInt(strings[3]));
            set.add(student);
        }

        // 关闭键盘录入须知：如果后面不再使用键盘录入是可以关闭的，如果后面还要使用，就不要关闭
        // bufferedReader.close();

        return set;
    }

    /**
     * 将学生信息写入文件
     * @param set
     */
    public static void write2File(Set<Student> set, File destFile) throws IOException {
        BufferedWriter bufferedWriter = null;
        try {
            bufferedWriter = new BufferedWriter(new FileWriter(destFile));

            for (Student stu: set) {
                bufferedWriter.write(stu.getName() + " --- " + stu.getSum());
                bufferedWriter.newLine();
                bufferedWriter.flush();
            }
        } finally {
            if (bufferedWriter != null) {
                try {
                    bufferedWriter.close();
                } catch (IOException e) {
                    throw new RuntimeException("关闭失败");
                }
            }
        }
    }
}
