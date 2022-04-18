package main

import "fmt"

type Person struct {
	Name string
	Age  int
}

func main() {
	// 创建结构体变量，直接指定字段值
	var p1 = Person{"p1", 1}
	p2 := Person{"p2", 2}

	// 在创建结构体变量时，把字段名和字段值写在一起
	var p3 = Person{
		Name: "p3",
		Age:  3,
	}
	p4 := Person{
		Name: "p4",
		Age:  4,
	}
	fmt.Println(p1, p2, p3, p4) // {p1 1} {p2 2} {p3 3} {p4 4}

	// 返回结构体指针类型
	var p5 = &Person{"p5", 5}
	p6 := &Person{"p6", 6}

	// 在创建结构体指针变量时，把字段名和字段值写在一起
	var p7 = &Person{
		Name: "p7",
		Age:  7,
	}
	p8 := &Person{
		Name: "p8",
		Age:  8,
	}
	fmt.Println(p5, p6, p7, p8) // &{p5 5} &{p6 6} &{p7 7} &{p8 8}
}
