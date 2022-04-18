package main

import "fmt"

type Person struct {
	Name string
	Age  int
}

func main() {
	// 声明结构体变量的四种方式
	// 方式一
	var p1 Person
	fmt.Println(p1) // { 0}

	// 方式二
	p2 := Person{"mary", 20}
	fmt.Println(p2) // {mary 20}

	// 方式三，返回结构体指针
	var p3 *Person = new(Person)
	// 因为返回的是一个指针，因此标准的给字段赋值方式
	// (*p3).Name = "anne" 可以写为 p3.Name = "anne"
	// 可以这样写的原因是 go 的设计者为了程序员使用方便，底层会对 p3.Name = "anne" 进行处理 (*p3).Name = "anne"
	(*p3).Name = "anne"
	p3.Name = "jane"
	(*p3).Age = 20
	fmt.Println(*p3) // {jane 20}

	// 方式四
	var p4 *Person = &Person{"li", 20}
	// 因为返回的是一个指针，因此标准的给字段赋值方式
	(*p4).Name = "anne"
	fmt.Println(*p4) // {anne 20}
}
