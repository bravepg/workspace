#include <iostream>
using namespace std;
#include <string>

class Person {
    public:
        string name;
        int age;
        Person(string name, int age) {
            this->name = name;
            this->age = age;
        }
};

// 利用模版提供通用的函数
template<class T>
bool myCompare(T &a, T &b) {
    if (a == b) {
        return true;
    }
    return false;
}
// 具体化模板，以 template<> 开头，并通过名称指定出类型
// 具体化模板优先于常规模板
template<>bool myCompare(Person &p1, Person &p2) {
    if (p1.name == p2.name && p1.age == p2.age) {
        return true;
    }
    return false;
}

int main() {
    Person p1("tom", 10);
    Person p2("tom", 10);

    // 除了通过重载运算符以外，还可以通过具体化模板实现对比功能
    cout << myCompare(p1, p2) << endl;
    
    return 0;
}