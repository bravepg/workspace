package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	// 定义文件路径
	filePath := "src/go_code/chapter12-file/write.txt"

	file, err := os.OpenFile(filePath, os.O_WRONLY|os.O_CREATE, 0666)

	if err != nil {
		fmt.Printf("open file err = %v\n", err)
	}

	// 函数退出时，关闭 file句柄，否则会有内存泄漏
	defer file.Close()

	str := "hello, Tripp\n"
	// 写入时，使用带缓冲的 *Writer
	writer := bufio.NewWriter(file)
	// 循环写入
	for i := 0; i < 5; i++ {
		writer.WriteString(str)
	}
	// 因为 writer 是带缓存的，因此在调用时 WriterString 方法时
	// 其实内容是先写到缓存的，需要调用 Flush 方法，将缓冲的数据写入文件
	writer.Flush()
}
