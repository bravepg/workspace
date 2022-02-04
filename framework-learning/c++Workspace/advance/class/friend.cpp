#include <iostream>
using namespace std;
#include <string>

// 提前让编译器知道 Person 的存在
template<class T1, class T2>
class Person;

template<class T1, class T2> // 函数模版的实现
void printPerson2(Person<T1, T2> p) {
    cout << p.name << " --- " << p.age << endl;
}

template<class T1, class T2>
class Person {
    // 全局函数类内实现
    friend void printPerson1(Person<T1, T2> p) {
        cout << p.name << " --- " << p.age << endl;
    }
    // 全局函数类外实现
    // 如果全局函数是类外实现，需要让编译器提前知道
    // friend void printPerson2(Person<T1, T2> &p); // 普通函数的声明
    friend void printPerson2<>(Person<T1, T2> p); // 加空模版参数列表变成函数模板
    private:
        T1 name;
        T2 age;
    public:
        Person(T1 name, T2 age) {
            this->name = name;
            this->age = age;
        }
};

int main() {
    Person<string, int> p("tom", 21);
    printPerson1(p);
    printPerson2(p);

    return 0;
}