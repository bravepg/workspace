package main

import "fmt"

func main() {
	// 声明一个 channel
	// var intChan chan int
	// intChan = make(chan int, 3)
	intChan := make(chan int, 3)

	fmt.Printf("intChan 的值为 %v，intChan 的地址为 %p\n", intChan, &intChan) // intChan 的值为 0x140000b8000，intChan 的地址为 0x140000ae018

	// 1. 向管道写入数据
	intChan <- 10
	num := 100
	intChan <- num

	// 2. 看看管道的长度和容量
	fmt.Printf("channel 的长度为 %v， 容量为 %v\n", len(intChan), cap(intChan)) // channel 的长度为 2， 容量为 3

	// 注意点
	// 3. 给管道写入数据时，不能超过其容量
	intChan <- 20
	// intChan <- 30 // fatal error: all goroutines are asleep - deadlock!

	// 4. 从管道中获取数据
	num1 := <-intChan
	num2 := <-intChan
	num3, ok := <-intChan
	fmt.Println(num1, num2, num3, ok) // 10 100 20

	// 5. 在没有使用协程的情况下，如果我们的管道数据已经全部取出，再取就会报 deadlock
	// num4, ok := <-intChan // fatal error: all goroutines are asleep - deadlock!
}
