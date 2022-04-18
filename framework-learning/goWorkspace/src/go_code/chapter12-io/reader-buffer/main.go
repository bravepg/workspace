package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
)

func main() {
	// 打开文件
	// file 的叫法（文件对象、文件指针、文件句柄）
	file, err := os.Open("src/go_code/chapter12-file/demo.txt")
	if err != nil {
		fmt.Println("open file err =", err)
	}

	// 函数退出时，关闭 file句柄，否则会有内存泄漏
	defer file.Close()

	// 创建一个带缓冲区的 *Reader
	// 默认缓冲区大小是 4096
	reader := bufio.NewReader(file)

	// 循环读取文件内容
	for {
		str, err := reader.ReadString('\n') // 读取到一个换行就结束
		fmt.Print(str)
		if err == io.EOF { // io.EOF 表示文件的末尾
			break
		}
	}

	fmt.Println("文件读取结束")
}
