#include <iostream>
using namespace std;
#include <string>

class Building {
    // 告诉编译器 friendMain 全局函数是 Building 类的好朋友，可以访问类中的私有内容
    friend void friendMainVisitor(Building &building) ;
    private:
        string bedRoom;
    public:
        string sittingRoom;
    public:
        Building() {
            bedRoom = "卧室";
            sittingRoom = "客厅";
        }
};

void friendMainVisitor(Building &building) {
    cout << building.sittingRoom << endl;
    cout << building.bedRoom << endl;
}

int main() {
    Building building;
    friendMainVisitor(building);

    return 0;
}