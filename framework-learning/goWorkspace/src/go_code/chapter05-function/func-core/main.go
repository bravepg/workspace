package main

import "fmt"

func getSum(n1 int, n2 int) int {
	return n1 + n2
}

// 支持对返回值命名
// 不需要关注计算顺序了
func getSumAndSub(n1 int, n2 int) (sum int, sub int) {
	sub = n1 - n2
	sum = n1 + n2
	return
}

// 可变参数
func sum(n1 int, args ...int) int {
	sum := n1
	// 遍历 args
	for i := 0; i < len(args); i++ {
		sum += args[i]
	}
	return sum
}

// 自定义数据类型
type myFunType func(int, int) int

// 函数作为形参
func myFun(funVar myFunType, n1 int, n2 int) int {
	return funVar(n1, n2)
}

func main() {
	n := getSum

	fmt.Printf("n 的数据类型是 %T, getSum 的数据类型是 %T\n", n, getSum)
	// n 的数据类型是 func(int, int) int, getSum 的数据类型是 func(int, int) int

	res := myFun(getSum, 1, 2)
	fmt.Println(res)

	// a, b := getSumAndSub(2, 1)
	fmt.Println(getSumAndSub(2, 1)) // 3 1

	fmt.Println("求和结果为", sum(1, 2, 3))
}
