#include <iostream>
using namespace std;

class Person {
    public:
        string name;
        int age;
        Person(string name, int age) {
            this->name = name;
            this->age = age;
        }
        bool operator==(Person& p) {
            if (this->name == p.name && this->age == p.age) {
                return true;
            }
            return false;
        }
};

int main() {
    Person p1("zhang", 10);
    Person p2("zhang", 10);

    if (p1 == p2) {
        cout << "相等" << endl;
    } else {
        cout << "不相等" << endl;
    }

    return 0;
}