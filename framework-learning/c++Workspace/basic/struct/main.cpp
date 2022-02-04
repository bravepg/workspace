#include <iostream>
using namespace std;
#include <string>

struct student {
    string name;
    int age;
} s3;

int main() {
    // 使用结构体的方式
    // 1. struct 结构体名 变量名
    struct student s1;
    s1.name = "张三";
    s1.age = 20;
    cout << "姓名: " << s1.name << ", 年龄: " << s1.age << endl;

    // 2. struct 结构体名 变量名 {初始化}
    student s2 = { "李四", 21 };
    cout << "姓名: " << s2.name << ", 年龄: " << s2.age << endl;

    // 3. 定义结构体的时候顺便创建变量
    s3.name = "王五";
    s3.age = 22;
    cout << "姓名: " << s3.name << ", 年龄: " << s3.age << endl;

    return 0;
}