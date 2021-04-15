#include <stdio.h>

int main() {
	int count = 10;
	for (int one = 0; one < 10; one++) {
		for (int two = 0; two < 10; two++) {
			for (int five = 0; five < 10; five++) {
				if (one + 2 * two + 5 * five == count) {
					printf("你需要%d个1角，%d个2角，%d个5角构成%d角钱\n", one, two, five, count);
					goto outer;
				}
			}
		}
	}
	outer:
		return 0;
}
