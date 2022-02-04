#include <iostream>
using namespace std;
#include <string>

const double PI = 3.14;

// 定义一个圆类
class Circle {
    public: 
        int m_radius;
        void setRadius(int radius) {
            m_radius = radius;
        }
        double calculate() {
            return 2 * PI * m_radius;
        }
};

int main() {
    // 定义一个实例
    Circle c1;
    c1.setRadius(2);
    cout << "圆的周长为: " << c1.calculate() << endl;

    return 0;
}