#include <stdio.h>

int main() {
	int a[10] = {a[0] = 1};
	printf("a 的长度是：%lu\na[0]的长度是：%lu\n", sizeof(a), sizeof(a[0]));
	printf("a 的值是：");
	for (int i; i < 10; i++) {
		printf("%d ", a[i]);
	}
	// int b[] = a;
	return 0;
}
