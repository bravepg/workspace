package main

import "fmt"

type A struct {
	Name string
	age  int
}

func (a A) SayHello() {
	fmt.Println(a.Name)
}

func (a A) hello() {
	fmt.Println(a.age)
}

type B struct {
	A
	Name string
}

// 结构体嵌套结构体指针
type B2 struct {
	*A
	Name string
}

// 结构体的匿名字段是基本类型
type C struct {
	A
	int
}

func main() {
	b := B{
		A: A{
			Name: "tom",
			age:  20,
		},
		Name: "btom",
	}
	b.A.hello() // 20
	// 匿名结构体字段访问可以简化
	b.SayHello()                  // tom
	fmt.Println(b, b.Name, b.age) // {{tom 20} btom} btom 20

	b2 := B2{
		A: &A{
			Name: "tom",
			age:  20,
		},
		Name: "btom",
	}
	fmt.Println(b2, *b2.A, b2.Name) // {0x1400000c030 btom} {tom 20} btom

	c := C{
		A: A{
			Name: "tom",
			age:  20,
		},
		int: 20,
	}
	fmt.Println(c) // {{tom 20} 20}
}
