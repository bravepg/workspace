package main

import "fmt"

func main() {
	// 初始化数组的四种方式
	var numArr01 [3]int = [3]int{1, 2, 3}
	fmt.Println("numArr01 =", numArr01) // numArr01 = [1 2 3]

	var numArr02 = [3]int{4, 5, 6}
	fmt.Println("numArr02 =", numArr02) // numArr02 = [4 5 6]

	// ... 是规定的写法
	var numArr03 = [...]int{1, 2, 3}
	fmt.Println("numArr03 =", numArr03) // numArr03 = [1 2 3]

	var numArr04 = [...]int{0: 100, 2: 200}
	fmt.Println("numArr04 =", numArr04) // numArr04 = [100 0 200]

	for _, v := range numArr04 {
		fmt.Println("v =", v)
	}
}
