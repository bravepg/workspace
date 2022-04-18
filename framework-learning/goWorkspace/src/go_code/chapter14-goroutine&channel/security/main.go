package main

import (
	"fmt"
	"sync"
	"time"
)

var (
	myMap = make(map[int]int, 10)
	// 全局变量加锁
	// lock 是一个全局互斥锁
	// sync 是 synchronized 同步的意思
	// Mutex 是互斥的意思
	lock sync.Mutex
)

func factorial(n int) {
	var sum int = 1
	for i := 1; i <= n; i++ {
		sum *= i
	}

	lock.Lock() // 加锁
	// 结果放入 map
	myMap[n] = sum // fatal error: concurrent map writes
	lock.Unlock()  // 解锁
}

func main() {
	for i := 1; i <= 20; i++ {
		go factorial(i)
	}

	time.Sleep(time.Second * 3)

	// 再次加锁
	lock.Lock() // 加锁
	for i, v := range myMap {
		fmt.Printf("map[%d]=%d\n", i, v)
	}
	lock.Unlock() // 解锁
}
