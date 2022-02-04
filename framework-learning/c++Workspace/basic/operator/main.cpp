#include <iostream>
using namespace std;
int main() {
    // 整数加减乘除
    int a1 = 10;
    int b1 = 3;

    cout << a1 + b1 << endl;
    cout << a1 - b1 << endl;
    cout << a1 * b1 << endl;
    cout << a1 / b1 << endl;
    cout << 5.0 / 2.5 << endl; // 2
    cout << 5.0 / 2.6 << endl; // 1.92308

    cout << a1 % b1 << endl;
    // cout << 5.0 % 2.6 << endl; // error
    
    cout << (4 == 3) << endl;
    cout << (4 != 3) << endl;
    cout << (4 >= 3) << endl;
    cout << (4 <= 3) << endl;
    cout << (4 > 3) << endl;
    cout << (4 < 3) << endl;

    int a = 10;
    int b = 0;
    cout << !a << endl;
    cout << !!a << endl;
    cout << (a && b) << endl;
    cout << (a || b) << endl;

    return 0;
}
