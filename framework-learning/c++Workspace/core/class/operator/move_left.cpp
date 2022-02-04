#include <iostream>
using namespace std;

class Person {
    friend ostream& operator<<(ostream &cout, Person &p1);
    private:
        int a;
        int b;
    public:
        void setA(int a) {
            this->a = a;
        }
        void setB(int b) {
            this->b = b;
        }
};
// 一般不会使用成员函数来重载左移运算符，因为无法实现 cout 在左侧
// 全局函数重载 + 号
ostream& operator<<(ostream &cout, Person &p1) {
    cout << "a = " << p1.a << ", b = " << p1.b;
    return cout;
}
int main() {
    Person p;
    p.setA(10);
    p.setB(20);
    cout << p << ", end" << endl;

    return 0;
}