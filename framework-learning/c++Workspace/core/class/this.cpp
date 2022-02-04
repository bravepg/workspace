#include <iostream>
using namespace std;
#include <string>

class Person {
    public:
        Person(int age) {
            // this 指针指向被调用的成员函数所属的对象
            this->age = age;
        }
        int getAge() {
            return this->age;
        }
         // 以引用的方式返回，每次不会生成一个新的对象，因此结果是 30
        Person& personAddAge(Person &p) {
            this->age += p.age;
            return *this;
        }
        // 以值的方式返回，每次会生成一个新的对象，因此结果是 20
        // Person personAddAge(Person &p) {
        //     this->age += p.age;
        //     return *this;
        // }
    private:
        int age;
};

int main() {
    Person p1 = Person(10);
    Person p2 = Person(10);
    p1.personAddAge(p2).personAddAge(p2);

    cout << p1.getAge() << endl;

    return 0;
}