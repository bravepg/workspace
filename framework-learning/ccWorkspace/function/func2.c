#include <stdio.h>

void f(void) {
	printf("in f()\n");
}

int main() {
	int i = 0;
	int *p = &i;

	*p = 20;

	int a[] = {1, 2};

	// 函数指针
	void (*pf)(void) = f;
	(*pf)();
	
	printf("%p\n", pf);
	printf("%p\n", main);
	printf("%p\n", a);
	return 0;
}
