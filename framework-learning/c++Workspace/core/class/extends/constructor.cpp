#include <iostream>
using namespace std;

class Base {
    public:
        int a;
    protected:
        int b;
    private:
        int c;
    public:
        Base() {
            cout << "Base 构造函数" << endl;
        }
        ~Base() {
            cout << "Base 析构函数" << endl;
        }
};

class Son: public Base {
    public:
        int d;
    public:
        Son() {
            cout << "Son 构造函数" << endl;
        }
        ~Son() {
            cout << "Son 析构函数" << endl;
        }
};

int main() {
    Son();

    return 0;
}