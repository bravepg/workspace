package main

import "fmt"

func main() {
	if age := 20; age > 18 {
		fmt.Println("年龄大于 18")
	}

	var score int
	fmt.Println("请输入分数：")
	fmt.Scanln(&score)

	if score == 100 {
		fmt.Println("优秀")
	} else if score > 90 {
		fmt.Println("良")
	} else {
		fmt.Println("中")
	}
}
