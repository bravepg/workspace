package day22.cn.leo.housework;

import day22.cn.leo.housework.domain.Student;
import day22.cn.leo.housework.tool.GetInfoTool;

import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.Comparator;
import java.util.Set;

public class GetStudentInfo {

    public static void main(String[] args) throws IOException {
        // 创建一个逆序比较器
        Comparator comparator = Collections.reverseOrder();
        Set<Student> set = GetInfoTool.getStudents(comparator);

        File file = new File("student.md");
        GetInfoTool.write2File(set, file);
    }
}
