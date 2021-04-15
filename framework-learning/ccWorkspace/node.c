#include "node.h"
#include <stdio.h>
#include <stdlib.h>

typedef struct _list {
	Node *head;
} List;

void add(List *pList, int number);

int main(int argc, char const *argv[]) {
	printf("%lu\n", sizeof(NULL));
	int number;
	Node *head = NULL;
	List list;
	list.head = NULL;
	while(number != -1) {
		scanf("%d", &number);
		add(&list, number);;
	}

	return 0;
}

void add(List *pList, int number) {
	// add to likned-list
	Node *p = (Node*)malloc(sizeof(Node));

	p->value = number;
	p->next = NULL;

	 // find the last
	 Node *last = pList->head;

	 if (last) {
		while(last->next) {
			last = last->next;
		}
		last->next = p;
	 } else {
		pList->head = p;
	 }
}
