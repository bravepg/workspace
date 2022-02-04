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

// 1. 使用一个已经创建完毕的对象来初始化一个新对象
void demo01() {
    Person p1(10);
    Person p2(p1);
}
// 2. 值传递的方式给函数参数传值
// 值传递相当于拷贝一个 Person
void doWork(Person p) {}
void demo02 () {
    Person p1;
    doWork(p1);
}
// 3. 值方式返回局部对象（与编译器有关不绝对）
Person doWork03() {
    Person p1;
    return p1;
}
void demo03 () {
    Person p;
    p = doWork03();
    // Person p = doWork03();
}

// 拷贝构造函数的调用时机
int main() {
    // demo01();
    // demo02();
    demo03();

    return 0;
}