package main

import "fmt"

func main() {
	var slice1 []int = []int{1, 2, 3}
	slice2 := append(slice1, 4, 5, 6)
	slice3 := append(slice2, slice2...)

	slice1[0] = 2

	// slice1 改变了，其他两个切片都没有改变
	fmt.Println("slice1 =", slice1) // slice1 = [2 2 3]
	fmt.Println("slice2 =", slice2) // slice2 = [1 2 3 4 5 6]
	fmt.Println("slice3 =", slice3) // slice3 = [1 2 3 4 5 6 1 2 3 4 5 6]
}
