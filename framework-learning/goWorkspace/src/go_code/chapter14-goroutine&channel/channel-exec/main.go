package main

import "fmt"

func writeData(numChan chan int) {
	for i := 1; i <= 2000; i++ {
		numChan <- i
		fmt.Println("write data =", i)
	}
	close(numChan)
}

func readData(numChan chan int, resChan chan map[int]int, exitChan chan bool) {
	for {
		v, ok := <-numChan
		if !ok {
			break
		}
		fmt.Println("read data =", v)
		sum := 0
		for i := 0; i < v; i++ {
			sum += i
		}
		resChan <- map[int]int{v: sum}
	}
	exitChan <- true
}

func main() {
	num := 8
	numChan := make(chan int, 50)
	resChan := make(chan map[int]int, 2000)
	exitChan := make(chan bool, num)

	go writeData(numChan)
	for i := 0; i < num; i++ {
		go readData(numChan, resChan, exitChan)
	}

	for {
		if len(exitChan) == num {
			break
		}
	}

	close(resChan)

	for v := range resChan {
		fmt.Println("遍历的结果", v)
	}
}
