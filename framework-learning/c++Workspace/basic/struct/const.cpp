#include <iostream>
using namespace std;
#include <string>

struct student {
    string name;
    int age;
} s3;


void printStudent(const student *const p) {
    // p=0; // 无法修改指针
    // p->age = 30; // 无法通过指针修改变量
    cout << "子函数 --- " << "姓名: " << p->name << ", 年龄: " << p->age << endl;
}

int main() {
    student s = { "李四", 21 };
    printStudent(&s);
    cout << "主函数 --- " << "姓名: " << s.name << ", 年龄: " << s.age << endl;

    return 0;
}