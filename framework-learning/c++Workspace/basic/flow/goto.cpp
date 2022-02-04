#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 10; j++) {
            cout << "i = " << i;
            cout << ", j = " << j << endl;
            goto FLAG;
        }
    }
    FLAG:
        cout << "执行结束" <<endl ;
    return 0;
}