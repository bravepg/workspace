package main

import "fmt"

type Circle struct {
	radius float64
}

func (cicle *Circle) getArea() float64 {
	return 3.14 * (*cicle).radius * (*cicle).radius
}

func main() {
	// 声明结构体变量
	var c Circle = Circle{5.0}
	// 编译器底层做了优化，(&c).getArea() 等价于 c.getArea()
	// 因为编译器会自动加上 &
	fmt.Println((&c).getArea()) // 78.5
	fmt.Println(c.getArea())    // 78.5
}
