package main

import (
	"fmt"
	"unsafe"
)

func main() {
	var num = 100

	// fmt.Printf 用于格式化输出
	// unsafe.Sizeof 是 unsafe 包中的一个函数，可以返回变量占用的字节数
	fmt.Printf("num 的类型 %T, num 占用的字节数是 %d", num, unsafe.Sizeof(num))
}
