#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
	char s[] = "hello";
	char *p = strchr(s, 'l');
	
	// 小套路，获取前面字符
	char c = *p;
	*p= '\0';
	char *t = (char *)malloc(strlen(s) + 1);

	strcpy(t, s);
	printf("%s\n", s);

	// 小套路，恢复字符串
	*p = c;
	printf("%s\n", s);
	
	free(t);
	return 0;
}

