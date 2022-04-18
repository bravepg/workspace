package main

import "fmt"

type Person struct {
	Name   string
	Age    int
	Scores [5]float64
	// 指针slice、map 的零值都是 nil，即没有分配空间
	// 如果想使用，需要先 make
	ptr     *int
	friends []int
	map1    map[string]string
}

func main() {
	// 声明结构体变量
	var p1 Person
	fmt.Println(p1)                 // { 0 [0 0 0 0 0] <nil> [] map[]}
	fmt.Printf("p1 的地址为 %p\n", &p1) // p1 的地址为 0x1400000c030

	// 虽然从输出上看 friends map1 是 [] map[]，但本质都是 nil
	if p1.ptr == nil && p1.friends == nil && p1.map1 == nil {
		fmt.Println("默认是 nil") // 默认是 nil
	}

	// 给变量赋值
	p1.Name = "tom" // { 0}
	p1.Age = 23
	// p1.friends = make([]int, 0)
	p1.friends = append(p1.friends, 10)

	p1.map1 = make(map[string]string, 0)
	p1.map1 = map[string]string{
		"name": "tom",
	}

	p1.ptr = new(int)
	*p1.ptr = 1

	fmt.Println(p1, *p1.ptr) // {tom 23 [0 0 0 0 0] 0x1400001a0d8 [10] map[name:tom]} 1

	// 结构体是值类型
	p2 := p1
	p2.Name = "tom1"
	fmt.Println(p1, *p1.ptr) // {tom 23 [0 0 0 0 0] 0x1400001a0d8 [10] map[name:tom]} 1
	fmt.Println(p2, *p2.ptr) // {tom1 23 [0 0 0 0 0] 0x1400001a0d8 [10] map[name:tom]} 1
}
