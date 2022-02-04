#include <iostream>
using namespace std;

class Base {
    public:
        int a;
        Base() {
            a = 100;
        }
        void func() {
            cout << "Base func 调用 "<< endl;
        }
        void func(int a) {
            cout << "Base func(int a)  调用 "<< endl;
        }
};

class Son: public Base {
    public:
        int a;
        Son() {
            a = 200;
        }
        void func() {
            cout << "Son func 调用 "<< endl;
        }
};

int main() {
    Son son;
    cout << "son a = " << son.a << endl;
    cout << "base a = " << son.Base::a << endl;

    son.func();
    son.Base::func();

    // 如果子类中出现和父类中同名的成员函数，子类的同名成员会隐藏掉父类中所有的同名成员函数（包括重载的函数）
    // 如果想访问，需要加作用域
    // son.func(100);
    son.Base::func(100);

    return 0;
}