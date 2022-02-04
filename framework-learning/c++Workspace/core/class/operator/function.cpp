#include <iostream>
using namespace std;
#include <string>

class Person {
    public:
        string name;
        int age;
        Person() {
        }
        void operator()(string text) {
            cout << text << endl;
        }
};

int main() {
    Person p1;

    p1("hello");

    // 匿名函数对象
    Person()("world");

    return 0;
}