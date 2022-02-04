#include <iostream>
using namespace std;

class Animal {
    public:
        int age;
};

// 虚继承解决菱形继承问题
// Animal 称为虚基类
class Sheep: virtual public Animal {};
class Tuo: virtual public Animal {};

class SheepTuo: public Sheep, public Tuo {};

int main() {
    SheepTuo sheep;
    sheep.Sheep::age = 20;
    sheep.Tuo::age = 30;
    
    cout << sheep.Sheep::age << endl;
    cout << sheep.Tuo::age << endl;
    cout << sheep.age << endl;
    
    return 0;
}