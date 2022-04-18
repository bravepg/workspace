package main

import (
	"fmt"
	"unsafe"
)

func main() {
	var b = false

	fmt.Printf("b 的类型 %T, b 占用的字节数是 %d", b, unsafe.Sizeof(b))
}
