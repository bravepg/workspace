#include <stdio.h>

int main() {
	int count = 10;
	for (int one = 0; one < 10; one++) {
		for (int two = 0; two < 10; two++) {
			for (int five = 0; five < 10; five++) {
				if (one + 2 * two + 5 * five == count) {
					printf("你需要%d个1角，%d个2角，%d个5角构成%d角钱\n", one, two, five, count);
					// 不像 Java、JavaScript 等语言的 break 可以跳出外层循环一样
					// C 的 break 只能跳出内层循环，需要使用 goto 来实现类似效果
					goto outer;
				}
			}
		}
	}
	outer:
		return 0;
}
