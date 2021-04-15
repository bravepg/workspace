#include <stdio.h>
#include <string.h>

char *mycpy(char *dst,  const char* src) {
	// int idx = 0;
	// while(src[idx]) {
		// dst[idx] = src[idx];
		// idx++;
	// }
	// dst[idx] = '\0';
	char *ret = dst;
	while ((*dst++ = *src++));
	*dst = '\0';
	return ret;
}

int main() {
	char s1[] = {};
	char s2[] = "123";

	const char *s3 = mycpy(s1, s2);

	for (int i = 0; i < strlen(s2) + 1; i++) {
		printf("%c\n", s3[i]);
	}
	// printf("%ld\n", strlen(s2));
	return 0;
}
