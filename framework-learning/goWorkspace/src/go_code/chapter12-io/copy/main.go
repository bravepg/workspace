package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
)

func CopyFile(dstFileName string, srcFileName string) (written int64, err error) {
	srcFile, err := os.Open(srcFileName)

	if err != nil {
		fmt.Printf("open file err=%v\n", err)
	}

	defer srcFile.Close()

	reader := bufio.NewReader(srcFile)

	dstFile, err := os.OpenFile(dstFileName, os.O_WRONLY|os.O_CREATE, 0666)

	if err != nil {
		fmt.Printf("write file err=%v\n", err)
	}

	defer dstFile.Close()

	writer := bufio.NewWriter(dstFile)

	return io.Copy(writer, reader)
}

func main() {
	_, err := CopyFile("src/go_code/chapter12-file/demo_copy.txt", "src/go_code/chapter12-file/demo.txt")
	if err != nil {
		fmt.Println("拷贝完成")
	}
}
