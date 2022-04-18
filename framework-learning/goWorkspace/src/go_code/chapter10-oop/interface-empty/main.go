package main

import "fmt"

type T interface{}

type Stu struct {
	Name string
}

func demo(stu Stu) {
	stu.Name = "tom1"
}

func main() {
	var t T
	// interface 类型默认是一个指针
	fmt.Println(t) // <nil>

	// 可以把任何一个变量赋值给空接口
	t = Stu{Name: "tom"}
	fmt.Println(t) // {tom}

	stu := Stu{Name: "tom"}
	demo(stu)
	fmt.Println(stu) // {tom}
}
