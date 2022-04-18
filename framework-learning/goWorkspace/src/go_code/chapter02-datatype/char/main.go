package main

import (
	"fmt"
)

func main() {
	var c1 byte = 'a'
	var c2 byte = '1'

	// 直接输出就是输出了字符对应的 ASCII 码值
	fmt.Println("c1 = ", c1, "c2 = ", c2)
	// 如果希望输出对应的字符，需要进行格式化输出
	fmt.Printf("c1 = %c, c2= %c", c1, c2)

	var c3 int = '精'
	fmt.Printf("\nc3 = %c, c3 对应的码值是 %d", c3, c3)

	var c4 int = 22269
	fmt.Printf("\nc4 = %c", c4)

	var c5 = 10 + 'a'
	fmt.Printf("\nc5 = %c, c5 对应的码值是 %d", c5, c5)
}
