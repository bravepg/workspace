#include <iostream>
using namespace std;

void demo01() {
    cout << "demo01()" << endl;
}

void demo01(int a) {
    cout << "demo01(int a)" << endl;
}

int main() {
    demo01();
    demo01(10);

    return 0;
}