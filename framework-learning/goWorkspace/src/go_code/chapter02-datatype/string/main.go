package main

import (
	"fmt"
	"unsafe"
)

func main() {
	var str = "背景"
	str = "中国历史"
	// str[0] = '1' // 字符串不可进行修改

	fmt.Printf("str 的类型 %T, str 占用的字节数是 %d", str, unsafe.Sizeof(str))

	var str2 = "中" +
		"国"
	fmt.Println("\n", str2)
}
