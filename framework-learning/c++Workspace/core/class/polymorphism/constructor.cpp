#include <iostream>
using namespace std;
#include <string>

class Animal {
    public:
        Animal() {
            cout << "Animal 构造函数调用" << endl;
        }
        // 利用虚析构可以解决父类指针释放子类对象时不干净的问题
        // virtual ~Animal() {
        //     cout << "Animal 析构函数调用" << endl;
        // }
        // 纯虚析构
        virtual ~Animal() = 0;
        // 函数前面加上 virtual 可以实现地址晚绑定
        // 纯虚函数
        virtual void speak() = 0;
};

// 纯虚析构需要在外部实现
Animal::~Animal() {
    cout << "Animal 析构函数调用" << endl;
}

class Cat: public Animal {
     public:
        string *name;
        Cat(string name) {
            cout << "Cat 构造函数调用" << endl;
            this->name = new string(name);
        }
        ~Cat() {
            if (this->name != NULL) {
                cout << "Cat 析构函数调用" << endl;
                delete this->name;
                this->name = NULL;
            }
        }
        void speak() {
            cout << "小猫在叫" << endl;
        }
};

// 地址早绑定，在编译阶段确定地址函数
// 如果想执行让猫在叫，那么这个函数地址就不能提前绑定，需要在运行阶段进行绑定，地址晚绑定
void doSpeak(Animal *animal) {
    animal->speak();
}

int main() {
    // 抽象类 Animal 无法实例化对象
    // Animal animal;
    // new Animal;
    Animal *animal = new Cat("tom");
    doSpeak(animal);
    delete animal;

    return 0;
}