#include <stdio.h>

int sum(int a, int b); // 函数原型声明

int main() {
	sum(1, 2);
	return 0;
}

int sum(int a, int b) { // 函数定义
	return a > b ? a : b;
}
