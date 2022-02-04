#include <iostream>
using namespace std;

class Person {
    public:
        Person(int age) {
            // this 指针指向被调用的成员函数所属的对象
            this->age = age;
        }
        // this 的本质是指针常量，指针的指向时不可以修改的
        // Person * const this;
        // 如果想让指针指向的值也不可以修改，就需要再加一个 const
        // const Person * const this;
        // 也就是常函数的写法（在成员函数后面加 const，修饰的是 this 指向）
        void showPerson() const {
            // this->age = 10; // 常函数不可以修改成员函数
            this->m_B = 10;
        }
    public:
        int age;
        mutable int m_B; // 特殊变量，即使在常函数中也可以修改，需要加关键字 mutable
};

int main() {
    const Person p1 = Person(10);

    // p1.age = 10; // 常对象不可以调用成员函数
    p1. m_B= 10;
    p1.showPerson(); // 常对象只能修改常函数

    return 0;
}