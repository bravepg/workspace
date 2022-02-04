#include <iostream>
using namespace std;

// const int &val 相当于 const int* const val
void showValue(const int &val) {

    // val = 20; // 不可以修改
    cout << "a = " << val << endl;
}
int main() {
    int a = 10;

    showValue(a);

    return 0;
}