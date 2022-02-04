#include <iostream>
using namespace std;
#include <string>

class Person {
    public:
        Person(int age) {
            // this 指针指向被调用的成员函数所属的对象
            this->age = age;
        }
        void showName() {
            cout << "Person" << endl;
        }
        // 报错原因是因为传入的指针是 NULL
        void getAge() {
            if (this == NULL) {
                return;
            }
            cout << this->age << endl;
        }
        
    private:
        int age;
};

int main() {
    Person *p = NULL;
    p->showName();
    p->getAge();

    return 0;
}