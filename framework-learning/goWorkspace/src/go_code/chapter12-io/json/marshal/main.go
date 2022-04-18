package main

import (
	"encoding/json"
	"fmt"
)

type Person struct {
	Name   string `json:"name"` // 反射机制
	Age    int    `json:"age"`
	Salary float64
}

func unmarshalStruct() {
	str := "{\"name\":\"jack\",\"age\":24,\"Salary\":80000}"

	// 定义 person
	var person Person

	// 将 str 反序列化
	err := json.Unmarshal([]byte(str), &person)

	if err != nil {
		fmt.Printf("反序列化错误 err = %v\n", err)
	}
	fmt.Println("str 反序列化的结果为", person) // str 反序列化的结果为 {jack 24 80000}
}

func unmarshalMap() {
	str := "{\"name\":\"jack\",\"age\":24,\"Salary\":80000}"
	// 定义 map
	var a map[string]interface{}

	// 将 str 反序列化
	// 反序列时，不需要 make 空间，因为 make 操作被封装到 Unmarshal 函数
	err := json.Unmarshal([]byte(str), &a)

	if err != nil {
		fmt.Printf("反序列化错误 err = %v\n", err)
	}
	fmt.Println("str 反序列化的结果为", a) // str 反序列化的结果为 map[Salary:80000 age:24 name:jack]
}

func unmarshalSlice() {
	str := "[{\"age\":20,\"name\":\"tom\"},{\"address\":[\"北京\",\"上海\"],\"gender\":\"male\",\"name\":\"jack\"}]"
	// 定义切片
	var slice []map[string]interface{}

	// 将 str 反序列化
	err := json.Unmarshal([]byte(str), &slice)

	if err != nil {
		fmt.Printf("反序列化错误 err = %v\n", err)
	}
	fmt.Println("slice 反序列化的结果为", slice) // slice 反序列化的结果为 [map[age:20 name:tom] map[address:[北京 上海] gender:male name:jack]]
}

func main() {
	unmarshalStruct()
	unmarshalMap()
	unmarshalSlice()
}
