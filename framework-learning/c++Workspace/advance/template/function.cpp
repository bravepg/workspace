#include <iostream>
using namespace std;

int add01(int a, int b) {
    return a + b;
}
// 利用模版提供通用的函数
template<class T>
T add02(T a, T b) {
    return a + b;
}
int main() {
    cout << "a = " << add01(10, 'c') << endl; // 普通函数，会发生隐式转换
    // cout << "b = " << add02(10, 'c')  << endl; // error 自动类型推导，不会发生隐式转换
    cout << "b = " << add02<int>(10, 'c')  << endl; // 显示指定类型，会发生隐式转换

    return 0;
}