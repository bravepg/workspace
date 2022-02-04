#include <iostream>
using namespace std;

// 1. 不要返回局部变量的引用
int& demo01() {
    int a = 10;
    return a;
}

int& demo02() {
    static int a = 10;
    return a;
}
int main() {
    int &ref = demo01();
    int &ref2 = demo02();

    // 2. 函数的调用可以作为左值
    demo02() = 100;

    cout << "ref = " << ref << endl; // 局部变量的内存已经释放
    cout << "ref2 = " << ref2 << endl; // 静态变量 ，存在全局区，全局区的数据在程序结束后系统释放

    return 0;
}