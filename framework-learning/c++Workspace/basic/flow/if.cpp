#include <iostream>
using namespace std;

int main() {
    // 输入一个考试分数
    int score = 0;
    cout << "请输入一个考试分数: " << endl;

    cin >> score;
    cout << "您输入的考试分数为: " << score << endl;

    if (score >= 600) {
        cout << "考上一本大学" << endl;
    } else if (score >= 500) {
        cout << "考上二本大学" << endl;
    } else if (score >= 400) {
        cout << "考上三本大学" << endl;
    } else {
        cout << "未考上大学" << endl;
    }

    int a = 10;
    int b = 20;
    int c = 0;
    
    c = a > b ? a : b;

    (a > b ? a : b) = 100;
    
    cout << "a = " << a << endl;
    cout << "b = " << b << endl;
    cout << "c = " << c << endl;

    return 0;
}