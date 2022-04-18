package main

import "fmt"

func AddUpper() func(int) int {
	var sum int = 10
	return func(n int) int {
		sum += n
		return sum
	}
}

func main() {
	var f = AddUpper()
	fmt.Println(f(1)) // 11
	fmt.Println(f(2)) // 13
}
