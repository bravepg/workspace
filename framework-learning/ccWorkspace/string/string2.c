#include <stdio.h>

int main() {
	char *s = "title";
	char *t = "r";
	// s[0] = 'T';
	t = s;
	printf("%p\n", t);
	printf("%c\n", t[1]);

	return 0;
}
