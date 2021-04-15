#include <stdio.h>

int main() {
	int a[] = {1, 3, 5, 7, 9, 10, 23, 34, 67};
	int left = 0;
	int right = sizeof(a) / sizeof(a[0]);
	
	int value = 7;
	int ret = -1;
	int middle;

	while (left < right) {
		middle = (left + right) / 2;
		printf("left=%d, middle=%d, right=%d\n", left, middle, right);
		if (a[middle] == value) {
			ret = middle;
			break;
		} else if (a[middle] > value) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	printf("%d\n", ret);

	return ret;
}
