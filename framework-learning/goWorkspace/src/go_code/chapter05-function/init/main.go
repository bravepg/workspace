package main

import "fmt"

// 通常可以在 init 函数中完成初始化工作
func init() {
	fmt.Println("init")
}

func main() {
	fmt.Println("main")
}
