#include <stdio.h>

int main() {
	int n;
	int fact =1;

	printf("请输入 n 的值：");

	scanf("%d", &n);
    
	printf("n = %d\n", n);
	
	for (int i = 2; i <= n; i++) {
		fact *= i;
	}
	
	printf("%d! = %d\n", n, fact);

	return 0;
} 

