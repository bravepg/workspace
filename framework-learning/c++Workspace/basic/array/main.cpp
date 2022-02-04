#include <iostream>
using namespace std;

int main() {
    // 1. 数据类型 数组名[长度]
    // int arr[5];
    // arr[0] = 10;

    // 2. 数据类型 数组名[长度] = {}
    // int arr[5] = { 10 };

    // 3. 数据类型 数组名[] = {}
    int arr[] = { 10, 20 };

    cout << arr[0] << endl;

    // 获取数组长度
    cout << "数组的长度为: " << sizeof(arr) / sizeof(arr[0]) << endl; // 2

    // 查看数组的首地址
    cout << "数组的首地址为: " << arr << endl; // 0x7ff7b2388500
    
    // 查看元素的首地址
    cout << "第一个元素的地址为: " << &arr[0] << endl; // 0x7ff7b2388500
    return 0;
}