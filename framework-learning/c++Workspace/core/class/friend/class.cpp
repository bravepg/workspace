#include <iostream>
using namespace std;
#include <string>

class Building;
class FriendClassVisitor {
    public:
        Building *building;
        FriendClassVisitor();
        void visit();
};

class Building {
    // 告诉 Building 类，FriendClassVisitor 类的 visit 函数是本类的好朋友
    friend void FriendClassVisitor::visit();
    private:
        string bedRoom;
    public:
        string sittingRoom;
    public:
        Building();
};

Building::Building() {
    bedRoom = "卧室";
    sittingRoom = "客厅";
}

FriendClassVisitor::FriendClassVisitor() {
    building = new Building;
}

void FriendClassVisitor::visit() {
    cout << building->sittingRoom << endl;
    cout << building->bedRoom << endl;
}

int main() {
    FriendClassVisitor visitor;
    visitor.visit();

    return 0;
}