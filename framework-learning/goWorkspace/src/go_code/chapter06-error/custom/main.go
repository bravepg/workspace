package main

import (
	"errors"
	"fmt"
)

func readConf(name string) (err error) {
	if name == "config.ini1" {
		return nil
	}

	// 返回一个自定义错误
	return errors.New("读取文件错误")
}

func test() {
	err := readConf("config.ini")
	if err != nil {
		// 输出错误并终止程序
		panic(err)
	}
	fmt.Println("test 继续执行")
}

func main() {
	test()
	fmt.Println("发生错误继续执行")
}
