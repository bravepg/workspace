#include <stdio.h>

int main() {
	int i = 0;
	char *s1 = "Hello";
	char *s2 = "Hello";
	char s3[] = "Hello";
	s3[0] = 'B';
	
	printf("&i=%p\n", &i);
	printf("s1=%p\n", s1);
	printf("s2=%c\n", s2[0]);
	printf("s3=%p\n", s3);
	printf("s3=%c\n", s3[0]);
	return 0;
}
