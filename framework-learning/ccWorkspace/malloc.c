#include <stdio.h>
#include <stdlib.h>

int main() {
	int number;
	int *a;
	int i;

	printf("请输入个数：");
	scanf("%d", &number);
	
	a = (int *)malloc(number * sizeof(int));

	for (i = 0; i < number; i++) {
		scanf("%d", &a[i]);
	}

	for (i = 0; i < number; i++) {
		printf("%d\n", a[i]);
	}

	free(a);
	return 0;
}
