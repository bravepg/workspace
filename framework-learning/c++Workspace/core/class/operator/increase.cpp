#include <iostream>
using namespace std;

class MyInteger {
    friend ostream& operator<<(ostream &cout, MyInteger m);
    private:
        int num;
    public:
        MyInteger() {
            num = 0;
        }
        // 重载前置 ++ 运算符
        // 后置 ++ 返回引用
        // 返回引用是为了一直对一个数据进行递增
        MyInteger& operator++() {
            // 先进行递增
            num++;
            return *this;
        }
        // 重载后置 ++ 运算符
        // 后置 ++ 返回值，因为 temp 变量在函数执行完后会被释放，返回引用是没有意义的
        // int 代表占位参数，可以用于区分前置和后置递增
        MyInteger operator++(int) {
            // 先记录当时结果
            MyInteger temp = *this;
            // 后递增
            num++;
            // 最后将记录结果返回
            return temp;
        }
};
// 一般不会使用成员函数来重载左移运算符，因为无法实现 cout 在左侧
// 全局函数重载 + 号
ostream& operator<<(ostream &cout, MyInteger m) {
    cout << "m = " << m.num;
    return cout;
}
int main() {
    MyInteger myint;

    cout << ++(++myint) << endl;
    cout << myint << endl;
    // cout << myint++ << endl;
    // cout << myint << endl;

    return 0;
}