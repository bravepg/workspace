#include <iostream>
using namespace std;
#include <string>

class Phone {
    public:
        string m_Name;
        Phone(string name) {
            cout << "Phone 的构造函数调用" << endl;
            m_Name = name;
        }
        ~Phone() {
            cout << "Phone 的析构函数调用" << endl;
        }
};

class Person {
    public:
        string m_Name;
        Phone m_Phone;

        // Phone m_Phone = pName; // 隐式转换
        Person(string name, string pName): m_Name(name), m_Phone(pName) {
            cout << "Person 的构造函数调用" << endl;
        }
        ~Person() {
            cout << "Person 的析构函数调用" << endl;
        }
};

int main() {
    Person p = Person("张三", "iphone");

    cout << p.m_Name << " -- " << p.m_Phone.m_Name << endl;

    return 0;
}