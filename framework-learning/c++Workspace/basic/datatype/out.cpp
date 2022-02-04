#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "short 占用的内存空间为: " << sizeof(short) << endl;
    cout << "int 占用的内存空间为: " << sizeof(int) << endl;
    cout << "long 占用的内存空间为: " << sizeof(long) << endl;
    cout << "long long 占用的内存空间为: " << sizeof(long long) << endl;

    float f1 = 3.1415926f;
    double d1 = 3.1415926;
    cout << "f1 = " << f1 << endl;
    cout << "d1 = " << d1 << endl;
    cout << "float 占用的内存空间为: " << sizeof(float) << endl;
    cout << "double 占用的内存空间为: " << sizeof(double) << endl;

    char ch = 'a';
    cout << "ch = " << ch << endl;
    cout << "char 占用的内存空间为: " << sizeof(char) << endl;
    cout << "char 对应的 ASCII 码为: " << (int)ch << endl;

    char str1[] = "hello world";
    string str2 = "hello world";
    cout << str1 << endl;
    cout << str2 << endl;

    bool flag = true;
    cout << "bool = " << flag << endl;
    cout << "bool 占用的内存空间为: " << sizeof(bool) << endl;
    
    return 0;
}