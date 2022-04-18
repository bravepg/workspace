package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	var count int = 0

	for {
		// 为了生成一个随机数，还需要一个 rand 种子
		rand.Seed(time.Now().UnixNano())
		// 如何生成 1-100 的整数
		num := rand.Intn(100) + 1
		count++
		fmt.Println(num)

		if num == 99 {
			break
		}
	}

	fmt.Printf("生成 99 一共用了 %v 次\n", count)
}
