package main

import "fmt"

type Point struct {
	x int
	y int
}

func main() {
	var a interface{}
	var point Point = Point{1, 2}

	a = point // ok
	// b := a // error 需要 type assertion
	b, ok := a.(Point)
	if ok {
		fmt.Println(b) // {1 2}
	} else {
		fmt.Println("转换失败")
	}

	if c, ok := a.(float32); ok {
		fmt.Println(c)
	} else {
		fmt.Println("转换失败") // 转换失败
	}
}
