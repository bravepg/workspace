package main

import "fmt"

func test() {
	defer func() {
		// err := recover()
		if err := recover(); err != nil {
			fmt.Println("err =", err)
		}
	}()
	num := 0
	res := 10 / num

	fmt.Println("res", res)
}

func main() {
	test()
	fmt.Println("发生错误继续执行")
}
