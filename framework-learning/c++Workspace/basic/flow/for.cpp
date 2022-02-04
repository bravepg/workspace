#include <iostream>
using namespace std;

// int main() {
    
//     for (int i = 0; i < 10; i++) {
//     	cout << i << endl;
//     }

//     return 0;
// }

// 上面的代码相当于
int main() {
    int i = 0;
    for (; ;) {
        if (i >= 10) {
        	break;
        }
    	cout << i << endl;
        i++;
    }

    return 0;
}