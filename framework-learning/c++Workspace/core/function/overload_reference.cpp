#include <iostream>
using namespace std;

void demo01(int &a) { // int &a = 10; 不合法
    cout << "demo01()" << endl;
}

void demo01(const int &a) { // const int &a = 10; 合法
    cout << "demo01(const int &a)" << endl;
}

int main() {
    int a = 10;
    // demo01(a);
    demo01(10);

    return 0;
}