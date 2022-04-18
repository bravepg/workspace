package main

import "fmt"

var (
	// 全局匿名函数
	Fun1 = func(n1 int, n2 int) int {
		return n1 * n2
	}
)

func main() {
	// 定义匿名函数时直接调用，这种匿名函数只能调用一次
	res1 := func(n1 int, n2 int) int {
		return n1 + n2
	}(10, 20)

	fmt.Println("res1", res1) // 30

	// 将匿名函数赋值给变量，可以实现匿名函数多次调用
	a := func(n1 int, n2 int) int {
		return n1 - n2
	}

	res2 := a(20, 10)
	fmt.Println("res2", res2) // 10

	res3 := Fun1(10, 20)
	fmt.Println("res2", res3) // 200
}
