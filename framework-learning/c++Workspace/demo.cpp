#include <iostream>
using namespace std;

// 1. #define 宏常量
#define Day 7

int main() {

    // 2. const 修饰的变量
    const int month = 12;

    cout << "一周总共有: " << Day << " 天" << endl;
    cout << "一年总共有: " << month << " 个月份" << endl;
    return 0;
}
