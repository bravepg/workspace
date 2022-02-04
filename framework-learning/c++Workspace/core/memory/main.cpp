#include <iostream>
using namespace std;
#include <string>

// 创建全局变量
int g_a = 10;
int g_b = 10;

// const 修饰的全局变量（全局常量）
const int c_g_a = 10;
const int c_g_b = 10;

int main() {
    // 创建局部变量
    int a = 10;
    int b = 10;

    // 创建静态变量
    static int s_a = 10;
    static int s_b = 10;

    cout << "全局变量 g_a 的地址为: " << &g_a << endl; // 0x102bb10c8
    cout << "全局变量 g_b 的地址为: " << &g_b << endl; // 0x102bb10cc
    cout << "局部变量 a 的地址为: " << &a << endl; // 0x7ff7bd3564f8
    cout << "局部变量 b 的地址为: " << &b << endl; // 0x7ff7bd3564f4
    cout << "静态变量 s_a 的地址为: " << &s_a << endl; // 0x102bb10d0
    cout << "静态变量 s_b 的地址为: " << &s_b << endl; // 0x102bb10d4

    // 字符串常量
    cout << "字符串常量的地址为: " << &"hello" << endl; // 0x102bace8a

    // const 修饰的局部变量
    const string s = "hello";
    const int c_l_a = 10;
    const int c_l_b = 10;

    cout << "全局常量 c_g_a 的地址为 : " << &c_g_a << endl; // 0x102bacf3c
    cout << "全局常量 c_g_b 的地址为 : " << &c_g_b << endl; // 0x102bacf40
    cout << "局部常量 s 的地址为 : " << &s << endl; // 0x7ff7bd3564d8
    cout << "局部常量 c_l_a 的地址为 : " << &c_l_a << endl; // 0x7ff7bd3564d4
    cout << "局部常量 c_l_b 的地址为 : " << &c_l_b << endl; // 0x7ff7bd3564d0

    return 0;
}