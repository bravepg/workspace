#include <stdio.h>

int main() {
	char word[8];
	char word2[8];

	scanf("%7s", word);
	scanf("%7s", word2);

	printf("%s##%s##\n", word, word2);
	return 0;
}
