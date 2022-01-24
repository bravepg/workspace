#include <stdio.h>

void f(void) {
	printf("f()\n");
}

void g(void) {
	printf("g()\n");
}

int main() {
	void (*fa[])(void) = {f, g};
	
	int i = 1;
	if (i >= 0 && i < sizeof(fa) / sizeof(fa[0])) {
		(*fa[i])();
	}
	return 0;
}
