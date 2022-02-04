#include <iostream>
using namespace std;

int main() {
    // 1. const 修饰指针（常量指针）
    // const 在前
    int a = 10;
    int b = 10;

    const int *p1 = &a;
    p1 = &b;
    // *p1 = 20; // error 可以修改指针指向，不能通过常量指针修改指针所指向的值（要注意，值本身是可以修改的，只是不能通过当前指针）
    cout << p1 << endl;

    // 2. const 修饰常量（指针常量）
    int *const p2 = &a;
    // p2 = &a; // error 不能修改指针指向，可以通过指针修改所指向的值
    *p2 = 20;

    // 3. const 既修饰指针又修饰常量
    const int *const p3 = &a;
    // p3 = &b;
    // *p3 = 20;

    return 0;
}