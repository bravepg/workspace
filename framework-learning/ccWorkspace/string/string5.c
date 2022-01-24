#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
	char s[] = "hello";
	char *p = strchr(s, 'l');

	printf("%s\n", p); // 输出字符串 llo
	printf("%p\n", p); // 输出地址 0x7ff7bfe0c508

	// 如何寻找第二个 l
	char *p2 = strchr(p + 1, 'l');
	printf("%s\n", p2); // 输出字符串 lo
	
	// 小套路，获取前面字符
	char c = *p;
	*p= '\0';
	char *t = (char *)malloc(strlen(s) + 1);

	strcpy(t, s);
	printf("%s\n", t);

	// 小套路，恢复字符串
	*p = c;
	printf("%s\n", s);
	
	free(t);
	return 0;
}

