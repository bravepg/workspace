#include <iostream>
using namespace std;

class Person {
    private:
        int m_Age;
    public:
        // 初始化列表初始化属性
        Person(): m_Age(10) {
            cout << "Person 的无参数函数调用" << endl;
        }

        // 普通构造函数
        Person(int age) {
            m_Age = age;
            cout << "Person 的有参数函数调用"  << endl;
        }
};

// 1. 使用一个已经创建完毕的对象来初始化一个新对象
void demo01() {
    Person p1;
}

// 拷贝构造函数的调用时机
int main() {
    demo01();

    return 0;
}