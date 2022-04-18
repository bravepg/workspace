package main

import (
	"fmt"
	"time"
)

func putNum(intChan chan int) {
	for i := 1; i <= 8000; i++ {
		intChan <- i
	}
	close(intChan)
}
func getPrimeByChannel(numChan chan int, resChan chan int, exitChan chan bool) {
	for {
		v, ok := <-numChan
		if !ok {
			break
		}
		flag := true
		for j := 2; j <= v; j++ {
			if v%j == 0 {
				flag = false
				break
			}
		}
		if flag {
			resChan <- v
		}
	}
	exitChan <- true
}

func getPrimeByFor(num int) []int {
	var slice []int = make([]int, 0)

	for i := 2; i <= num; i++ {
		if i == 2 {
			slice = append(slice, i)
		}
		flag := true
		for j := 2; j <= i; j++ {
			if i%j == 0 {
				flag = false
				break
			}
		}
		if flag {
			slice = append(slice, i)
		}
	}
	return slice
}

func main() {
	numChannel := 4
	intChan := make(chan int, 1000)
	primeChan := make(chan int, 5000)
	exitChan := make(chan bool, numChannel)

	start1 := time.Now().UnixMilli()

	go putNum(intChan)
	for i := 0; i < numChannel; i++ {
		go getPrimeByChannel(intChan, primeChan, exitChan)
	}

	// for {
	// 	if len(exitChan) == 4 {
	// 		break
	// 	}
	// }
	// close(primeChan)
	// for v := range primeChan {
	// 	fmt.Println("v ===", v)
	// }

	// 教程上的处理方式
	go func() {
		for i := 0; i < numChannel; i++ {
			<-exitChan
		}
		fmt.Println("协程处理完毕的时间是", time.Now().UnixMilli()-start1) // 2ms
		close(primeChan)
	}()

	for {
		_, ok := <-primeChan
		if !ok {
			break
		}
	}

	start2 := time.Now().UnixMilli()
	num := 8000
	getPrimeByFor(num)
	fmt.Println("普通方式处理完毕的时间是", time.Now().UnixMilli()-start2) // 4ms
}
