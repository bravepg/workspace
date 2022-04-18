package main

import "fmt"

func main() {
	// string 的底层是一个 byte 数组，因此 string 也可以进行切片处理
	str := "hello"
	slice := str[:]
	fmt.Println("slice =", slice) // slice = hello

	// 如果需要修改字符串，可以将 string -> []byte 或者 []rune -> 修改 -> 重写成 string
	arr1 := []byte(str)
	arr1[0] = 'z'
	str = string(arr1)
	fmt.Println("str =", str) // str = zello

	// 转成 []byte 后，可以处理英文和数字，但是不能处理中文
	// 原因是 []byte 按字节来处理，而一个汉字，是 3 个字节，因此会出现乱码
	// 解决方式是将 string 转成 []rune，因为 []rune 是按字符处理的，兼容汉字
	arr2 := []rune(str)
	arr2[0] = '北'
	str = string(arr2)
	fmt.Println("str =", str) // str = 北ello
}
