#include <iostream>
using namespace std;

class Person {
    private:
        int m_age;
    public:
        // 普通构造函数
        Person() {
            cout << "Person 的无参数函数调用" << endl;
        }

        // 普通构造函数
        Person(int age) {
            m_age = age;
            cout << "Person 的有参数函数调用"  << endl;
        }

        // 拷贝构造函数
        // 拷贝出一摸一样的数据
        Person(const Person &p) {
            m_age = p.m_age;
            cout << "Person 的拷贝构造函数调用"  << endl;
        }

        // 析构构造函数
        ~Person() {
            cout << "Person 的析构构造函数调用" << endl;
        }
};

// 调用
void demo() {
    // 1. 括号法
    // //  Person p1(); 会被认为是一个函数声明，而不会被认为是在创建对象
    // Person p1; // 默认构造函数调用（调用默认构造函数时，不需要使用小括号()）
    // Person p2(10); // 有参构造函数
    // Person p3(p2); // 拷贝构造函数

    // 2. 显示法
    Person p1;
    Person p2 = Person(10);
    Person p3 = Person(p2);
    // Person(10); // 是一个匿名对象，匿名对象的特点是，当前执行结束后，系统会立即回收掉匿名对象
    // Person(p3); // 不要利用拷贝构造函数初始化匿名对象，编译器会认为 Person(p3) == Person p3;

    // 3. 隐式转换法
    Person p4 = 10; // 相当于 Person p4 = Person(10);
    Person p5 = p4; // 相当于 Person p5 = Person(p4);
}

int main() {
    demo();

    return 0;
}