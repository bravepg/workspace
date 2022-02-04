#include <iostream>
using namespace std;

// 利用模版提供通用的函数
template<class T>
void mySwap(T &a, T&b) {
    T temp = a;
    a = b;
    b = temp;
}
int main() {
    int a = 10;
    int b = 20;
    // 1. 自动类型推导，必须要推导出一致的数据类型 T 才可以使用
    // mySwap(a, b);
    // 2. 显示指定类型，模版必须要确定出 T 的数据类型，才可以使用
    mySwap<int>(a, b);

    cout << "a = " << a << endl;
    cout << "b = " << b << endl;
    return 0;
}