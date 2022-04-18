package main

import "fmt"

func main() {
	// 多变量声明方式 1
	// var n1, n2, n3 int

	// 多变量声明方式 2
	// var n1, name, n3 = 100, "tom", 888

	// 多变量声明方式 3
	n1, name, n3 := 100, "tom", 888

	fmt.Println("n1 = ", n1, "name = ", name, "n3 = ", n3)
}
