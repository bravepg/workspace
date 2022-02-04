#include <iostream>
using namespace std;

int *func() {
    // 利用 new 关键字，可以将数据开辟到堆区
    int *p = new int(10);
    return p;
}

void demo() {
    // 在堆区开辟内存
    // 指针本质也是局部变量，放在栈上，指针指向的数据保存在了堆区
    int *p = func();
    cout << *p << endl;
    cout << *p << endl;

    // 如果想释放数据，利用关键字 delete
    delete p;
    // 如果是数组指针，则使用 delete[]
    // delete[] p;
    cout << *p << endl;
}

int main() {
    demo();

    return 0;
}