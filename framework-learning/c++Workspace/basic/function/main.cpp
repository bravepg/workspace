#include <iostream>
using namespace std;

int sum(int sum1, int sum2) {
    return sum1 + sum2;
}

void test01() {}
void test02(int a) {}
int test03() { return 0; }
int test04(int a) { return a ; }

int main() {
    cout << test03() << endl;

    return 0;
}