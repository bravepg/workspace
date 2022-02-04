#include <iostream>
using namespace std;

class Animal {
    public:
        // 函数前面加上 virtual 可以实现地址晚绑定
        virtual void speak() {
            cout << "动物在叫" << endl;
        }
};

class Cat: public Animal {
     public:
        void speak() {
            cout << "小猫在叫" << endl;
        }
};

// 地址早绑定，在编译阶段确定地址函数
// 如果想执行让猫在叫，那么这个函数地址就不能提前绑定，需要在运行阶段进行绑定，地址晚绑定
void doSpeak(Animal &animal) {
    animal.speak();
}

int main() {
    Cat cat;
    doSpeak(cat);

    return 0;
}