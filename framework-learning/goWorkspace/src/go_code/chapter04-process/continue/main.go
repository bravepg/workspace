package main

import (
	"fmt"
)

func main() {
label1:
	for i := 0; i < 2; i++ {
		for j := 0; j < 3; j++ {
			if j == 1 {
				continue label1
			}
			fmt.Printf("i = %v, j = %v\n", i, j)
		}
	}
}
