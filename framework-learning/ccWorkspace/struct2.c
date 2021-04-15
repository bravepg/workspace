#include <stdio.h>
#include <stdbool.h>
struct date {
	int month;
	int day;
	int year;
};

int numberOfDays(struct date d);
bool isLeap(struct date d);

int main(int argc, char const *argv[]) {
	struct date today;
	struct date tomorrow;
	
	printf("请输入今天的日期：");
	scanf("%i %i %d", &today.month, &today.day, &today.year);

	int maxDay = numberOfDays(today);
	if (today.day < maxDay) {
		tomorrow.day = today.day + 1;
		tomorrow.month = today.month;
		tomorrow.year = today.year;
	} else if (today.month == 12) {
		tomorrow.day = 1;
		tomorrow.month = 1;
		tomorrow.year = today.year + 1;
	} else {
		tomorrow.day = 1;
		tomorrow.month = today.month + 1;
		tomorrow.year = today.year;
	}

	printf("明天的日期是：%i-%i-%i\n", tomorrow.year, tomorrow.month, tomorrow.day);
	return 0;
}

int numberOfDays(struct date d) {
	int days;
	int daysPerMonth[] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

	if (isLeap(d) && d.month == 2) {
		days = 29;
	} else {
		days = daysPerMonth[d.month - 1];
	}

	return days;
}

bool isLeap(struct date d) {
	bool ret = false;

	if (((d.year % 4 == 0) && (d.year % 100 != 0)) || d.year % 400 == 0) {
		ret = true;
	}

	return ret;
}
