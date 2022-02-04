#include <iostream>
using namespace std;

void myPrint(int a, int b) {
    cout << "普通函数调用" << endl;
}
// 利用模版提供通用的函数
template<class T>
void myPrint(T a, T b) {
    cout << "函数模板调用" << endl;
}
template<class T>
void myPrint(T a, T b, T c) {
    cout << "函数模重载调用" << endl;
}
int main() {
    myPrint(2, 3); // 1. 如果函数模版和普通函数都可以实现，优先调用普通函数
    myPrint<>(2, 3); // 2. 可以通过空模板参数列表来强制调用函数模版
    myPrint(2, 3, 4); // 3. 函数模版也可以发生重载
    myPrint('a', 'b'); // 4. 如果函数模板可以产生更好的匹配，优先调用函数模板
    
    return 0;
}