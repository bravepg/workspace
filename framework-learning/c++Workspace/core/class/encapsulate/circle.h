// 防止头文件重复包含
#pragma once
#include <iostream>
using namespace std;
#include "point.h"

class Circle {
    private:
        int m_R;
        Point m_Center;
    
    public:
        void setR(int r);
        int getR();
        void setPoint(Point point);
        Point getPoint();
};