#include <iostream>
using namespace std;

class Base {
    public:
        static int a;
        static void func() {
            cout << "Base static func 调用 "<< endl;
        }
        static void func(int a) {
            cout << "Base static func(int a)  调用 "<< endl;
        }
};

int Base::a = 100;

class Son: public Base {
    public:
        static int a;
        static void func() {
            cout << "Son static func 调用 "<< endl;
        }
};

int Son::a = 200;

int main() {
    Son son;

    // 通过对象访问
    cout << "son a = " << son.a << endl;
    cout << "base a = " << son.Base::a << endl;

    son.func();
    son.Base::func();

    // 如果子类中出现和父类中同名的成员函数，子类的同名成员会隐藏掉父类中所有的同名成员函数（包括重载的函数）
    // 如果想访问，需要加作用域
    // son.func(100);
    son.Base::func(100);

    // 通过类访问
    cout << "son a = " << Son::a << endl;
    cout << "base a = " << Son::Base::a << endl;
    Son::func();
    Son::Base::func();
    Son::Base::func(100);
    return 0;
}