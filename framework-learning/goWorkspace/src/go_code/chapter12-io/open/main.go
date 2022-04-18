package main

import (
	"fmt"
	"os"
)

func main() {
	// 打开文件
	// file 的叫法（文件对象、文件指针、文件句柄）
	file, err := os.Open("src/go_code/chapter12-file/demo.txt")
	if err != nil {
		fmt.Println("open file err =", err)
	}

	// 文件就是指针
	fmt.Println(file) // &{0x1400006e120}

	// 关闭文件
	err = file.Close()
	if err != nil {
		fmt.Println("close file err =", err)
	}
}
