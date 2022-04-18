package main

import (
	"fmt"
	"time"
)

// 每隔 1 秒，输出 1 次
func test() {
	for i := 1; i <= 10; i++ {
		fmt.Println("test() hello world", i)
		time.Sleep(time.Second)
	}
}

func main() {
	go test() // 开启协程
	for i := 1; i <= 10; i++ {
		fmt.Println("main() hello go", i)
		time.Sleep(time.Second)
	}
}
