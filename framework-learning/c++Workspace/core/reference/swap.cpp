#include <iostream>
using namespace std;

void swap01(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}

void swap02(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void swap03(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int a = 10;
    int b = 20;

    // 值传递
    // swap01(a, b);
    
    // 地址传递
    // swap02(&a, &b);
    
    // 引用传递
    swap03(a, b); // a b 会改变

    cout << "a = " << a << endl;
    cout << "b = " << b << endl;

    return 0;
}