#include <stdio.h>

void f(int *p);
void g(int k);

int main() {
	int i = 6;

	printf("i的地址是：%p\n", &i);
	f(&i);
	g(i);
	return 0;
}

void f(int *p) {
	printf("p的地址是：%p\n", p);
	*p = 24;
}

void g(int k) {
	printf("k的值是：%d\n", k);
}
