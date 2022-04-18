package main

import (
	"fmt"
)

func main() {
	var n int = 10

	fmt.Println("1")
	if n > 5 {
		goto label1
	}
	fmt.Println("2")
label1:
	fmt.Println("3")
}
