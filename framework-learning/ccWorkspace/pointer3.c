#include <stdio.h>

int main() {
	printf("sizeof(int) = %lu, sizeof(char) = %lu\n", sizeof(int), sizeof(char));
	
	char ac[] = {1, 2, 3};
	int ai[] = {1, 2, 3};
	
	char *p = ac;
	int *q = ai;

	printf("p = %p\n", p);
	printf("p++ = %p\n", p + 1);
	printf("q = %p\n", q);
	printf("q++ = %p\n", q + 1);
	
	printf("*q = %d, *(q + 1) = %d\n", *q, *(q + 1));
	return 0;
}
