#include <iostream>
using namespace std;
// time 系统头文件
#include <ctime>

int main() {
    // 添加随机数种子，利用当前系统时间生成随机数，防止每次随机数都一样
    srand((unsigned int) time(NULL));
    // 1. 随机生成一个数
    int num = rand() % 100 + 1;

    cout << "请您猜测一个数" << endl;
    // 2. 玩家进行猜测
    int val = 0;
    cin >> val;

    while (val != num) {
        cout << (val > num ? "猜的数大了，请重新猜" : "猜的数小了，请重新猜") << endl;
        cin >> val;
    }
    cout << "恭喜您猜中了" << endl;

    return 0;
}