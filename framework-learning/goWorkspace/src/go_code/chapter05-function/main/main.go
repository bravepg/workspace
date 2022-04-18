package main

import (
	"fmt"
	// GO111MODULE=off 的情况
	util "go_code/chapter05-function/utils" // 使用别名
)

func main() {
	var f1 float64 = 3.3
	var f2 float64 = 1.6
	var operator byte = '+'

	result := util.Calc(f1, f2, operator)

	fmt.Println("result", result)
}
