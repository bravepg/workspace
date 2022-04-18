package main

import (
	"fmt"
	"os"
)

func main() {
	arguments := os.Args

	fmt.Println("命令行参数的长度为", len(arguments))

	for _, v := range arguments {
		fmt.Println(v)
	}
}
