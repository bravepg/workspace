package main

import (
	"fmt"
	"unsafe"
)

func main() {
	var num float32 = -123.0000901
	var num2 float64 = -123.0000901

	var num3 = -123.01

	fmt.Println("num = ", num, "num2 = ", num2)
	fmt.Printf("num3 的类型 %T, num3 占用的字节数是 %d", num3, unsafe.Sizeof(num3))
}
