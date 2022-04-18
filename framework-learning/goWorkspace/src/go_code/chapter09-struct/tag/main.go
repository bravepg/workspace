package main

import (
	"encoding/json"
	"fmt"
)

type Person struct {
	Name string `json:"name"` // `json:"name"` 就是 struct tag
	Age  int
}

func main() {
	p1 := Person{"mary", 20}

	// 将 p1 序列化为 json 格式
	// json 的 Marshal 使用了反射机制
	jsonP1, err := json.Marshal(p1)
	if err != nil {
		fmt.Println("序列化错误")
	}

	// jsonP1 是 byte 切片，通过 string() 转化成字符串
	// fmt.Println(string(jsonP1)) // {"Name":"mary","Age":20}
	// 上面返回的 Name 和 Age 首字母都是大写，那么如何变成小写呢？
	// 直接结构体改成小写是不行的，因为变量会变成私有的
	// 通过 tag（json:"名称"） 解决
	fmt.Println(string(jsonP1)) // {"name":"mary","Age":20}
}
