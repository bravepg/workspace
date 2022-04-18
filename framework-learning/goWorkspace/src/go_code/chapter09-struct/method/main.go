package main

import "fmt"

type Person struct {
	Name string
}

// 给 Person 类型绑定一个方法
// (person Person) 体现 demo 方法是和 Person 绑定的
func (person Person) demo() {
	fmt.Println("demo()", person.Name)
}

func (person Person) getSum(n1 int, n2 int) int {
	return n1 + n2
}

func main() {
	// 声明结构体变量
	var p1 Person = Person{"anne"}
	// 调用方法
	p1.demo() // demo() anne
	// 不可以直接调用
	// demo()
	fmt.Println(p1.getSum(10, 20)) // 30
}
