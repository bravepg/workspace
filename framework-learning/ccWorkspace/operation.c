#include <stdio.h>

int main() {
	// int i = 0;

	// printf("0x%x\n", &i);
	// printf("%p\n", &i);
	// printf("%ld\n", sizeof(i));
	// printf("%ld\n", sizeof(&i));
	int a[10];

	printf("%p\n", &a);
	printf("%p\n", a);
	printf("%p\n", &a[0]);
	printf("%p\n", &a[1]);
	return 0;
}
