package main

import "fmt"

func main() {
	// 1. 如果运算的数都是整数，那么相除后会去掉小数部分，保留整数部分
	fmt.Println(10 / 4)

	var n1 float32 = 10 / 4
	fmt.Println(n1)

	// 2. 如果希望小数部分保留，则需要有浮点数参与运算
	var n2 float32 = 10.0 / 4
	fmt.Println(n2)

	// 3. ++ 只能独立使用
}
