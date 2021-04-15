#include <stdio.h>

int main() {
	int i = 0;
	char *s1 = "Hello";
	char *s2 = "Hello";
	char s3[] = "Hello";
	
	printf("&i=%p\n", &i);
	printf("s1=%p\n", s1);
	printf("s2=%p\n", s2);
	printf("s3=%p\n", s3);
	return 0;
}
