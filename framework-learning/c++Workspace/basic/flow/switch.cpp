#include <iostream>
using namespace std;

int main() {
    cout << "请给电影打分: " << endl;

    int score = 0;

    cin >> score;
    cout << "您打到分数为: " << score << endl;

    // string score = "hello"; // 报错，switch 在判断时只能时整数或者字符型
    switch (score) {
        case 10:
            cout << "您认为是经典电影" << endl;
            break;
        case 9:
            cout << "您认为是经典电影" << endl;
            break;
        default:
            break;
    }

    return 0;
}