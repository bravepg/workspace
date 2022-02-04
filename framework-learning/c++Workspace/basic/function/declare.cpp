#include <iostream>
using namespace std;

int sum(int a, int b);

int main() {
    cout << sum(3, 2) << endl;

    return 0;
}

int sum(int a, int b) {
    return a + b;
}