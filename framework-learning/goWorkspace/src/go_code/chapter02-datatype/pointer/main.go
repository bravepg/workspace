package main

import (
	"fmt"
	_ "unsafe" // 没有使用，但不想去掉，可以在前面加 _
)

func main() {
	var i int = 10

	fmt.Println("i 的地址是", &i) // i 的地址是 0x140000a2008

	// 1. ptr 是一个指针变量
	// 2. ptr 的类型是 *int
	// 3. ptr 本身的值是 &i
	var ptr *int = &i
	fmt.Println("i 的地址是", ptr)     // i 的地址是 0x140000a2008
	fmt.Println("ptr 的地址是", &ptr)  // ptr 的地址是 0x14000124020
	fmt.Println("ptr 指向的值为", *ptr) // 10

	var f float64 = 123.45
	var ptr2 *float64 = &f
	fmt.Println("ptr2 的地址是", &ptr2) // ptr2 的地址是 0x14000124028

	var b byte = 'c'
	var ptr3 *byte = &b
	fmt.Println("ptr3 的地址是", &ptr3) // ptr2 的地址是 0x140000ae030
}
