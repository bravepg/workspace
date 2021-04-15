#include <stdio.h>

int plus(int a, int b) {
	return a + b;
}

void calc(int (*f)(int, int)) {
	printf("%d\n", (*f)(1, 2));
}

int main() {
	calc(plus);
	return 0;
}
