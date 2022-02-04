#include <iostream>
using namespace std;
#include <string>

struct student {
    string name;
    int age;
} s3;

int main() {
    student s = { "张三", 20 };
    student *p = &s;

    cout << p->name << endl;

    return 0;
}