#include <iostream>
using namespace std;

class Base1 {
    public:
        int a;
        Base1() {
            a = 100;
        }
};
class Base2 {
    public:
        int a;
        int b;
        Base2() {
            a = 200;
            b = 200;
        }
};


class Son: public Base1, public Base2 {
    public:
        int c;
        int d;
        Son() {
            c = 300;
            d = 400;
        }
};

int main() {
    Son son;
    cout << sizeof(Son) << endl; // 16

    // 父类中出现同名成员需要用作用域区分
    cout << son.Base1::a << endl; // 100
    cout << son.Base2::a << endl; // 200

    return 0;
}