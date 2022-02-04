#include <iostream>
using namespace std;
#include <string>

template<class T1, class T2>
class Person {
    public:
        T1 name;
        T2 age;
        Person(T1 name, T2 age) {
            this->name = name;
            this->age = age;
        }
        void showPerson() {
            cout << this->name << " --- " << this->age << endl;
        }
};

// 1. 指定传入的数据类型（最常用）
void printPerson1(Person<string, int> &p) {
    p.showPerson();
}

// 2. 参数模版化
template<class T1, class T2>
void printPerson2(Person<T1, T2> &p) {
    p.showPerson();
    cout << "T1 的类型为: " << typeid(T1).name() << endl;
    cout << "T2 的类型为: " << typeid(T2).name() << endl;
}

// 3. 整个类模板化
template<class T>
void printPerson3(T &p) {
    p.showPerson();
    cout << "T 的类型为: " << typeid(T).name() << endl;
}

int main() {
    Person<string, int> p("tom", 21);
    // printPerson1(p);
    // printPerson2(p);
    printPerson3(p);

    return 0;
}