package main

import "fmt"

type Person struct {
	Name string
	Age  int
}

func main() {
	var p1 Person = Person{"mary", 20}

	p2 := &p1

	p2.Name = "anne"

	fmt.Println(p1.Name, p2.Name) // anne anne

	fmt.Printf("p1 的地址为 %p\n", &p1)              // p1 的地址为 0x1400000c030
	fmt.Printf("p2 的地址为 %p, p2 的值为 %p", &p2, p2) // p2 的地址为 0x1400000e028, p2 的值为 0x1400000c030
}
