package main

import "fmt"

func main() {
	// 第一种使用方式
	// 使用 map 前需要先 make，为 map 分配内存
	var a map[string]string = make(map[string]string, 2)
	a["1"] = "gao"
	a["2"] = "yao"
	a["1"] = "li"
	a["3"] = "yao"

	fmt.Println(a) // map[1:li 2:yao 3:yao]

	// 第二种使用方式，先声明后 make
	// 会提示按照第一种方式直接合并成一行
	// var b map[string]string
	// b = make(map[string]string, 2)
	// b["1"] = "go"
	// fmt.Println(b) // map[1:go]

	// 第三种方式，直接赋值
	c := map[string]string{
		"1": "go",
	}
	fmt.Println(c) // map[1:go]
}
