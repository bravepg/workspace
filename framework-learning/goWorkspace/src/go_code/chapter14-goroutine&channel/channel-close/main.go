package main

import "fmt"

func main() {
	intChan := make(chan int, 3)
	intChan <- 100
	intChan <- 200
	// 关闭管道
	close(intChan)

	// 关闭后不可以写入数据
	// intChan <- 300 // panic: send on closed channel

	// 关闭后仍然可以读取数据
	fmt.Println(<-intChan) // 100

	// 如果没有关闭，则会出现 deadlock 错误
	for v := range intChan {
		fmt.Printf("v = %v\n", v) // v = 200
	}
}
