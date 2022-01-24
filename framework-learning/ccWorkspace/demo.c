#include <stdio.h>

// void demo(char const *a) {
// 	// a[0] = 2;  // read-only variable is not assignable
// 	printf("%d\n", a[0]);
// }

void demo(char const *a[]) {
	// a[0] = "2";  // read-only variable is not assignable
	printf("%s\n", a[0]);
}


int main(int argc, char const *argv[]) {
	for (int i = 0; i < argc; i++) {
		printf("%d:%s\n", i, argv[i]);
	}

	char a[] = {'a', 'b'};

	char const *b[] = {"a", "b"};

	demo(b);

	return 0;
}
