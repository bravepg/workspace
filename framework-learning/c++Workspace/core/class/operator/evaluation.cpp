#include <iostream>
using namespace std;

class Person {
    public:
        int *age;
    public:
        Person(int age) {
            this->age = new int(age);
        }
        ~Person() {
            if (this->age != NULL) {
                delete this->age;
                this->age = NULL;
            }
        }
        // 重载赋值运算符
        Person& operator=(Person &p) {
            // 编译器提供的是浅拷贝
            // this->age = p.age;
            // 应该先判断是否有属性在堆区，如果有，先释放干净，然后再深拷贝
            if (this->age != NULL) {
                delete this->age;
                this->age = NULL;
            }
            // 深拷贝
            this->age = new int(*p.age); 
            // 返回对象本身
            return *this;
        }
};

int main() {
    Person p1(10);
    Person p2(20);
    Person p3(30);

    p1 = p2 = p3;

    cout << "p1 的年龄为: " << *p1.age << endl;
    cout << "p2 的年龄为: " << *p2.age << endl;
    cout << "p3 的年龄为: " << *p3.age << endl;
    return 0;
}