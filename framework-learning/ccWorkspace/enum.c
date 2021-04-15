#include <stdio.h>
enum color {red, yellow, blue, numOfColor};
void f(enum color c);

int main() {
	enum color c = red;
	
	scanf("%d", &c);

	f(c);
	return 0;
}

void f(enum color c) {
	printf("%d\n", c);
}
