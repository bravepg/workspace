#include <iostream>
using namespace std;

template<class T>
class Base {
    T m;
};

class Son1: public Base<int> { // 必须指明 T 类型，才能继承

};

// 如果想要灵活指定父类中的 T 类型，子类也需要变更类模版
template<class T1, class T2>
class Son2: public Base<T1> {
    public:
        T2 obj;
        Son2() {
            cout << "T1 的数据类型为: " << typeid(T1).name() << endl;
            cout << "T2 的数据类型为: " << typeid(T2).name() << endl;
        }
};

int main() {
    Son2<string, int> son;

    return 0;
}