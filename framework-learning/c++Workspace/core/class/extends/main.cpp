#include <iostream>
using namespace std;

class Base {
    public:
        int a;
    protected:
        int b;
    private:
        int c;
};

class Son: public Base {
    public:
        int d;
};

int main() {
    // 父类中所有非静态成员属性都会被子类传递下去
    // 父类中私有成员属性是被编译器给隐藏了，因此访问不到
    cout << sizeof(Son) << endl; // 16

    return 0;
}