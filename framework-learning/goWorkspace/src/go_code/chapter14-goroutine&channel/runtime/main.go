package main

import (
	"fmt"
	"runtime"
)

func main() {
	cpuNum := runtime.NumCPU()
	fmt.Println("cpu 的个数为", cpuNum) // cpu 的个数为 8

	// 设置使用 cpu 的个数
	// 1.8 以后不需要设置
	runtime.GOMAXPROCS(cpuNum - 1)
}
