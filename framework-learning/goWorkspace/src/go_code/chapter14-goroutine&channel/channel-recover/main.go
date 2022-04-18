package main

import "fmt"

func test() {
	// 使用 defer + recover 解决协程异常导致的全部程序崩溃
	defer func() {
		// 捕获 panic
		if err := recover(); err != nil {
			fmt.Println("test 发生错误")
		}
	}()
	var num int = 0
	fmt.Println(5 / num)
}

func main() {
	go test()
	fmt.Println("hello")
}
