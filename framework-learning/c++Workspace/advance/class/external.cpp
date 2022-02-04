#include <iostream>
using namespace std;
#include <string>

template<class T1, class T2>
class Person {
    public:
        T1 name;
        T2 age;
        Person(T1 name, T2 age);
        void showPerson();
};

// 构造函数的类外实现
template<class T1, class T2>
Person<T1, T2>::Person(T1 name, T2 age)  {
    this->name = name;
    this->age = age;
}

// 成员函数的类外实现
template<class T1, class T2>
void Person<T1, T2>::showPerson()  {
    cout << this->name << " --- " << this->age << endl;
}

int main() {
    Person<string, int> p("tom", 21);

    return 0;
}