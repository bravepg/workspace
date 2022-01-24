#include <stdio.h>

// 可以用于保护数组值
int sum(const int a[], int length);

int main() {
  int a[] = {1, 2, 3};
  sum(a, sizeof(a) / sizeof(a[0]));
  return 0;
}

int sum(const int *const a, int length) {
  // a[0]= 1; // 表达式必须是可修改的左值，无法通过指针修改变量
  // a = 1; // 表达式必须是可修改的左值，无法修改指针
  return 0;
}
