#include <stdio.h>

int main() {
	int a[] = {33, 47, 64, 23};
	int length = sizeof(a) / sizeof(a[0]);
	
	for (int i = length - 1; i > 0;  i--) {
		int maxId = 0;
		int temp = 0;
		for (int j = 1; j <= i; j++) {
			if (a[j] > a[maxId]) {
				 maxId = j;
			}
		}
		temp = a[maxId];
		a[maxId] = a[i];
		a[i] = temp;
		printf("%d\n", maxId);
	}

	for (int i = 0; i < length; i++) {
		 printf("%d ", a[i]);
	}
	return 0;
}
