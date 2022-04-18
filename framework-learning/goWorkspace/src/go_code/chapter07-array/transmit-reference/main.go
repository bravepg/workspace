package main

import "fmt"

func demo(arr []int) {
	arr[0] = 2
}

func main() {
	var slice []int
	var arr [5]int = [...]int{1, 2, 3, 4, 5}

	slice = arr[:]

	demo(slice)

	fmt.Println("slice =", slice) // slice = [2 2 3 4 5]
}
