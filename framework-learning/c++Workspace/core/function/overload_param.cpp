#include <iostream>
using namespace std;

void demo01(int a) {
    cout << "demo01(int a)" << endl;
}

void demo01(int a, int b = 10) {
    cout << "demo01(int a, int b = 10)" << endl;
}

int main() {
    int a = 10;
    // demo01(10); // 重载遇到默认参数，会出现二义性

    return 0;
}