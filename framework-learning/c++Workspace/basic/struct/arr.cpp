#include <iostream>
using namespace std;
#include <string>

struct student {
    string name;
    int age;
} s3;

int main() {
    struct student stuArray[10] = {
        {"张三", 20},
        {"李四", 21}
    };

    cout << stuArray[0].name << endl;

    return 0;
}