#include <stdio.h>

struct point {
	int x;
	int y;
};

struct point getStruct(void);
void outputStruct(struct point p);

int main(int argc, char const *argv[]) {
	struct point y;

	y = getStruct();
	outputStruct(y);
}

struct point getStruct(void) {
	struct point p;

	scanf("%d", &p.x);
	scanf("%d", &p.y);
	
	printf("getStruct, x=%d, y=%d\n", p.x, p.y);
	
	return p;
}

void outputStruct(struct point p) {
	printf("outputStruct, x=%d, y=%d\n", p.x, p.y);
}
