package main

import (
	"fmt"
)

func main() {
	var n1 int32 = 5
	var n2 int32 = 10

	switch n1 {
	case n2, 5, 10:
		fmt.Println("正确")
	// case 后面的表达式如果是常量值，则要求不能重复
	// case 5:
	// 	fmt.Println("正确～")
	default:
		fmt.Println("错误")
	}

	var x interface{}
	var y = 10.0

	x = y

	switch i := x.(type) {
	case nil:
		fmt.Printf("x 的类型是: %T", i)
	case int:
		fmt.Println("x 是 int 型")
	case float64:
		fmt.Println("x 是 float64 型")
	case func(int) float64:
		fmt.Println("x 是 func(int) 型")
	case bool, string:
		fmt.Println("x 是 bool 或者 string 型")
	default:
		fmt.Println("x 是未知值")
	}
}
