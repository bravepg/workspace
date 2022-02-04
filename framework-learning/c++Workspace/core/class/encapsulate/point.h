// 防止头文件重复包含
#pragma once
#include <iostream>
using namespace std;

class Point {
    private:
        int m_X;
        int m_Y;
    
    public:
        void setX(int x);
        int getX();
        void setY(int y);
        int getY();
};