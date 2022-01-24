#include <stdio.h>

int main(void) {
  int i;
	int *const q = &i;
  *q = 26; // ok
  // q++; // error 表达式必须是可修改的左值

  const int a[] = {1, 2, 3, -1};
  int *p = a;
  while (*p != -1) {
    printf("%d\n", *p++);
  }

  return 0;
}