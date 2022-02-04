#include <iostream>
using namespace std;

int main() {
    int a = 10;
    int &b = a; // 必须要进行初始化

    b = 20; // 这是赋值，不是更改引用

    cout << b << endl;

    return 0;
}