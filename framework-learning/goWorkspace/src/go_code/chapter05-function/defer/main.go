package main

import "fmt"

func sum(n1 int, n2 int) (res int) {
	// 当执行到 defer 时，暂时不执行，会将 defer 后面的语句压入到独立的栈中（defer 栈）
	// 当函数执行完毕后，再从 defer 栈中，按照先入后出的方式执行
	defer fmt.Println("n1 =", n1)
	defer fmt.Println("n2 =", n2)
	n1++ // 2
	n2++ // 3
	res = n1 + n2

	fmt.Println("res =", res)
	return
}

func main() {
	res := sum(1, 2)
	fmt.Println("main res =", res)
	// res = 5
	// n2 = 2
	// n1 = 1
	// main res = 5
}
