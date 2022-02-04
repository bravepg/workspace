#include <iostream>
using namespace std;

int main() {
    // 定义指针
    int a = 10;
    int *p = &a;

    cout << "a 的地址为: " << &a << endl;
    cout << "指针 p 为: " << p << endl;

    // 使用指针
    // 可以通过解引用的方式找到指针指向的内存中的数据
    *p = 100;

    cout << "a = " << a << endl;
    cout << "*p = " << *p << endl;

    return 0;
}