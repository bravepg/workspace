package main

import (
	"fmt"
	"io/ioutil"
)

func main() {
	// 使用 ioutil.ReadFile 一次性读取文件
	file := "src/go_code/chapter12-file/demo.txt"

	bytes, err := ioutil.ReadFile(file)

	if err != nil {
		fmt.Println("read file err =", err)
	}

	// 把读取内容显示到终端
	// hello
	// world
	fmt.Printf("%v", string(bytes))

	// 因为没有显示地 Open 文件，因此也不需要显示地 Close 文件
	// Open 和 Close 被封装到 ReadFile 内部
}
