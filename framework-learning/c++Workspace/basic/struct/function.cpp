#include <iostream>
using namespace std;
#include <string>

struct student {
    string name;
    int age;
} s3;

void printStudent1(student s) {
    s.age = 30;
    cout << "子函数 --- " << "姓名: " << s.name << ", 年龄: " << s.age << endl;
}
void printStudent2(student *p) {
    p->age = 30;
    cout << "子函数 --- " << "姓名: " << p->name << ", 年龄: " << p->age << endl;
}

int main() {
    student s = { "李四", 21 };
    // printStudent1(s);
    printStudent2(&s);
    cout << "主函数 --- " << "姓名: " << s.name << ", 年龄: " << s.age << endl;

    return 0;
}