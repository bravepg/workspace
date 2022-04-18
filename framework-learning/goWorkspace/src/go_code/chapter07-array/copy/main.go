package main

import "fmt"

func main() {
	var slice1 []int = []int{1, 2, 3}
	slice2 := make([]int, 10)

	copy(slice2, slice1)
	slice1[0] = 2

	// 两个切片是独立空间，slice1 改变了，slice2 没有改变
	fmt.Println("slice1 =", slice1) // slice1 = [2 2 3]
	fmt.Println("slice2 =", slice2) // slice2 = [1 2 3 0 0 0 0 0 0 0]
}
