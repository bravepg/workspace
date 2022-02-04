#include "circle.h"

void Circle::setR(int r) {
    m_R = r;
}
int Circle::getR() {
    return m_R;
}
void Circle::setPoint(Point point) {
    m_Center = point;
}
Point Circle::getPoint() {
    return m_Center;
}