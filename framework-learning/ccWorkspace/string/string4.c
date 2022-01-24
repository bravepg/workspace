#include <stdio.h>
#include <string.h>

int main() {
	// char line[] = "Hello";

	// printf("%lu\n", strlen(line)); // 5
	// printf("%lu\n", sizeof(line)); // 6

	char *s1 = "abc";
	char *s2 = "abc";

	printf("%d\n", strcmp(s1, s2));
	return 0;
}
