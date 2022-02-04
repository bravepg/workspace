#include <iostream>
using namespace std;
#include <string>

class Person {
    public:
        static int m_A; // 静态成员变量
        int m_B; // 非静态成员变量
        static void func() {
            m_A = 20;
            // m_B = 20; // 静态成员函数不可以访问非静态成员变量
            cout << "static void func 调用" << endl;
        }
    private:
        static void func2() {

        }
};

int Person::m_A = 10;

int main() {
    // 有两种访问静态函数的方式
    // 1. 通过对象访问
    Person p;
    p.func();
    
    // 2. 通过类名访问
    Person::func();
    // Person::func2(); // 无法访问私有

    return 0;
}