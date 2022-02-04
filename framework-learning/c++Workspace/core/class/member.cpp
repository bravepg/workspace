#include <iostream>
using namespace std;
#include <string>

// 成员变量和成员函数分开存储
class Person {
    int m_A; // 非静态成员变量，属于类的对象上
    static int m_B; // 静态成员变量，不属于类的对象上
    void func() {} // 非静态成员函数，不属于类的对象上
    static void staticFunc() {} // 静态成员函数，不属于类的对象上
};

int Person::m_B = 0;


int main() {
    Person p;
    // 空对象占用内存空间为 1
    // C++ 编译器会给每个空对象也分配一个字节空间，是为了区分不同的空对象所占的内存位置
    cout << "size of p = " << sizeof(p) << endl;

    return 0;
}