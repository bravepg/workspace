#include <iostream>
#include <string>
using namespace std;

int main() {
    // 1. 整型
    int a = 0;
    cout << "请给整型变量 a 赋值: " << endl;
    cin >> a;
    cout << "整型变量 a = " << a << endl;

    // 2. 浮点型
    float f = 3.14f;
    cout << "请给浮点型变量 f 赋值: " << endl;
    cin >> f;
    cout << "浮点型变量 f = " << f << endl;

    // 3. 字符型
    char ch = 'a';
    cout << "请给字符型变量 ch 赋值: " << endl;
    cin >> ch;
    cout << "字符型变量 ch = " << ch << endl;

    // 4. 字符串型
    string str = "hello";
    cout << "请给字符串型变量 ch 赋值: " << endl;
    cin >> str;
    cout << "字符串型变量 str = " << str << endl;

    // 5. 布尔类型
    bool flag = false;
    cout << "请给布尔类型变量 flag 赋值: " << endl;
    cin >> flag;
    cout << "布尔类型变量 flag = " << flag << endl;

    return 0;
}