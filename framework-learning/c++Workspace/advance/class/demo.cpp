#include <iostream>
using namespace std;
#include <string>

template<class NameType, class AgeType = int>
class Person {
    public:
        NameType name;
        AgeType age;
        Person(NameType name, AgeType age) {
            this->name = name;
            this->age = age;
        }
};

int main() {
    // Person<string, int> p1("tom", 21);
    Person<string> p1("tom", 21); // 参数列表中可以指定默认参数
    cout << p1.name << " --- " << p1.age << endl;

    return 0;
}