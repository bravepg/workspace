package main

import "fmt"

func main() {
	// 1. 默认情况下，管道是双向的（可读可写）
	// var chan1 chan int

	// 2. 声明为只读的
	// var chan2 <-chan int = make(chan int, 3)
	// num := <-chan2
	// fmt.Println("chan3", num)
	// chan2 <- 20 // cannot send to receive-only type <-chan int

	// 3. 声明为只写的
	var chan3 chan<- int = make(chan int, 3)
	chan3 <- 20
	// num := <-chan3 // cannot receive from send-only channel chan3

	fmt.Println("chan3", chan3)

	// 通过 select 解决管道阻塞问题
	intChan := make(chan int, 10)
	stringChan := make(chan string, 5)

	for i := 0; i < 10; i++ {
		intChan <- i
	}

	for i := 0; i < 5; i++ {
		stringChan <- "hello" + fmt.Sprintf("%d", i)
	}

	// 在传统方法中，如果不关闭就会阻塞导致 dead block
	// 如果在实际开发中，不确定什么时候关闭，可以使用 select 解决
label:
	for {
		select {
		// 如果 intChan 一直没有关闭，不会阻塞
		// 会自动到下一个 case 匹配
		case v := <-intChan:
			fmt.Printf("从 intChane 获取到数据 %d\n", v)
		case v := <-stringChan:
			fmt.Printf("从 stringChan 获取到数据 %s\n", v)
		default:
			fmt.Println("都取不到了")
			break label
		}
	}
}
