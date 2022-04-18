package main

import (
	"flag"
	"fmt"
)

func main() {
	var user string
	var pwd string

	// 接收命令行参数
	flag.StringVar(&user, "u", "", "用户名")
	flag.StringVar(&pwd, "p", "", "密码")

	// 转换操作，必须执行
	flag.Parse()

	// go run main.go -u localhost -p 123456
	fmt.Println(user, "---", pwd) // localhost --- 123456
}
