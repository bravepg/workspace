#include <iostream>
using namespace std;

class Person1 {
    public:
        void showPerson1() {
            cout << "showPerson1" << endl;
        }
};

class Person2 {
    public:
        void showPerson2() {
            cout << "showPerson2" << endl;
        }
};

template<class T>
class Demo {
    public:
        T obj;
        void func1() {
            obj.showPerson1();
        }
        void func2() {
            obj.showPerson2();
        }
};

int main() {
    Demo<Person1> demo;
    demo.func1();
    // demo.func2(); // 2. 类模板中的成员函数在调用时才创建（无法确定数据类型）

    return 0;
}