#include <stdio.h>

int main(int argc, char const *argv[]) {
	// 声明结构
	struct date {
		int month;
		int day;
		int year;
	};
	
	// 定义 date 结构类型的变量
	// struct date today;
	// today.month = 04;
	// today.day = 11;
	// today.year = 2021;

	struct date today;
	struct date day;

	today = (struct date){04, 11, 2021};

	day = today;

	day.year = 2022;

	printf("Today's date is %i-%i-%i.\n", today.year, today.month, today.day);
	printf("Day's date is %i-%i-%i.\n", day.year, day.month, day.day);
	return 0;
}
