package main

import (
	"fmt"
	"go_code/chapter01/variable/model"
)

func main() {
	// 声明变量
	var i int
	// 给变量赋值
	i = 10

	// 使用变量
	fmt.Println(i)
	// 包名 + 标识符
	fmt.Println(model.HeroName)
}
