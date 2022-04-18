package main

import "fmt"

func main() {
	num1 := 100
	fmt.Printf("num1 的类型是 %T, num1 的值是 %v, num1 的地址是 %v\n", num1, num1, &num1)
	// num1 的类型是 int, num1 的值是 100, num1 的地址是 0x1400012a008

	// new 用来分配内存，主要用来分配值类型，比如 int、float32、struct 返回的是指针
	num2 := new(int)
	fmt.Printf("num2 的类型是 %T, num2 的值是 %v, num2 的地址是 %v, 指向的值为 %v", num2, num2, &num2, *num2)
	// num2 的类型是 *int, num2 的值是 0x1400001a0c0, num2 的地址是 0x1400000e030, 指向的值为 0
}
