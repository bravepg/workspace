#include <stdio.h>

void demo(int *p);
int main() {
	int a[] = {2, 3, 4};
	demo(a);
	return 0;
}

void demo(int a[]) {
	printf("%d\n", a[1]);
	printf("%d\n", *a);
}
