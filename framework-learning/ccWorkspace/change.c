#include <stdio.h>

int main() {
	const int AMOUNT = 100;
	int price = 0, price2 = 0;

	printf("请输入金额（元）：");
	scanf("==%d, %d", &price, &price2);

	int change = AMOUNT - price;

	printf("找您%d元.\n", change);
	return 0;
}
