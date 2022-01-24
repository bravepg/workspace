#include <stdio.h>

int main() {
	int x = 0;
	int cnt = 0;
	int sum = 0;
	int number[100];

	while (x != -1) {
		scanf("%d", &x);
		sum += x;
		number[cnt] = x;
		cnt++;
	}
	if (cnt > 0) {
		double average = 1.0 * sum / cnt;
		for (int i = 0; i < cnt; i++) {
			if (number[i] > average) {
				printf("%d\n", number[i]);
			}
		}
	}
	return 0;
}
