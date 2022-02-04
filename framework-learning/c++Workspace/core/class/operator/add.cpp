#include <iostream>
using namespace std;

class Person {
    public:
        int a;
        int b;
        // 成员函数重载 + 号
        // Person operator+(Person &p) {
        //     Person temp;
        //     temp.a = this->a + p.a;
        //     temp.b = this->b + p.b;
        //     return temp;
        // }
};

// 全局函数重载 + 号
Person operator+(Person &p1, Person &p2) {
    Person temp;
    temp.a = p1.a + p2.a;
    temp.b = p1.b + p2.b;
    return temp;
}
// 函数的重载
Person operator+(Person &p1, int num) {
    Person temp;
    temp.a = p1.a + num;
    temp.b = p1.b + num;
    return temp;
}
int main() {
    Person p1;
    p1.a = 10;
    p1.b = 10;
    Person p2;
    p2.a = 20;
    p2.b = 20;

    // 成员函数重载 + 号本质调用
    // Person p3 = p1.operator+(p2);
    // Person p3 = p1 + p2;

    // 全局函数重载 + 号本质调用
    // Person p3 = operator+(p1, p2);
    Person p3 = p1 + p2;
    cout << "a = " << p3.a << ", b = " << p3.b << endl;

    Person p4 = p1 + 10;
    cout << "a = " << p4.a << ", b = " << p4.b << endl;

    return 0;
}