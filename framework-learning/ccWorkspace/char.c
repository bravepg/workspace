#include <stdio.h>

int main() {
	int i;
	char c;
	// scanf("%c", &c);
	scanf("%d", &i);
	c = i;
	printf("c=%d\n", c);
	printf("c='%c'\n", c);

	if ('1' == 49) {
		printf("yes\n");
	}
	return 0;
}
