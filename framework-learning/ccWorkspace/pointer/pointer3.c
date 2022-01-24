#include <stdio.h>

int main() {
	printf("sizeof(int) = %lu, sizeof(char) = %lu\n", sizeof(int), sizeof(char));
	
	char ac[] = {1, 2, 3};
	int ai[] = {1, 2, 3};
	
	char *p = ac;
	int *q = ai;
	int *q1 = &ai[2];

	printf("p = %p\n", p);
	printf("p++ = %p\n", p + 1);
	printf("q = %p\n", q);
	printf("q++ = %p\n", q + 1);
	
	printf("*q = %d, *(q + 1) = %d\n", *q, *(q + 1));
	printf("q1 - q = %ld\n", q1 - q); // 两个指针相减（不是指针的地址差，而是返回能放几个相同类型的数据，地址差/ sizeof ）
	return 0;
}
