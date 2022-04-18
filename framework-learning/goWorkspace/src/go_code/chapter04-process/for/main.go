package main

import (
	"fmt"
)

func main() {
	for i := 0; i < 1; i++ {
		fmt.Println("i", i)
	}

	var j int = 0
	for j < 1 {
		fmt.Println("j", j)
		j++
	}

	k := 0
	// 写法等价于 for ; ; {} 是一个无限循环，需要配合 break 语句使用
	for {
		if k < 1 {
			fmt.Println("k", k)
		} else {
			break
		}
		k++
	}

	str := "hello, 你好"
	fmt.Println("数组长度为", len(str))
	// 传统方式遍历，按照字节来遍历
	for i := 0; i < len(str); i++ {
		fmt.Printf("%c \n", str[i])
	}
	// 解决方式，使用切片 []rune
	str2 := []rune(str)
	for i := 0; i < len(str2); i++ {
		fmt.Printf("%c \n", str2[i])
	}
	// for range 遍历字符串
	for index, val := range str {
		fmt.Printf("index = %d, val = %c \n", index, val)
	}
}
