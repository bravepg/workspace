#include <stdio.h>

int main() {
	struct {
		int amount;
		char *name;
	} coins[] = {
		{1, "penny"},
		{5, "nickel"},
		{10, "dime"},
		{15, "quarter"},
		{50, "half-dollar"},
	};

	int key = 5;
	
	for (int i = 0; i < sizeof(coins) / sizeof(coins[0]); i++) {
		if (coins[i].amount == key) {
			printf("%s\n", coins[i].name);		
		}
	}
}
