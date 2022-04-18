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

func demoStruct() {
	person := Person{
		Name:   "jack",
		Age:    24,
		Salary: 80000.00,
	}

	// 将 person 序列化
	data, err := json.Marshal(&person)

	if err != nil {
		fmt.Printf("序列化错误 err = %v\n", err)
	}
	fmt.Println("person 序列化的结果为", string(data)) // person 序列化的结果为 {"name":"jack","age":24,"Salary":80000}
}

func demoMap() {
	// 定义 map
	// var a map[string]interface{}

	// 使用 map，需要先 make
	a := make(map[string]interface{})

	a["name"] = "tom"
	a["age"] = 20

	// 将 map 序列化
	data, err := json.Marshal(a)

	if err != nil {
		fmt.Printf("序列化错误 err = %v\n", err)
	}
	fmt.Println("map 序列化的结果为", string(data)) // map 序列化的结果为 {"age":20,"name":"tom"}
}

func demoSlice() {
	// 定义切片
	var slice []map[string]interface{}

	// 使用 map，需要先 make
	a := make(map[string]interface{})
	a["name"] = "tom"
	a["age"] = 20
	slice = append(slice, a)

	b := make(map[string]interface{})
	b["name"] = "jack"
	b["gender"] = "male"
	b["address"] = [2]string{"北京", "上海"}
	slice = append(slice, b)

	// 将 slice 序列化
	data, err := json.Marshal(slice)

	if err != nil {
		fmt.Printf("序列化错误 err = %v\n", err)
	}
	fmt.Println("slice 序列化的结果为", string(data)) // slice 序列化的结果为 [{"age":20,"name":"tom"},{"address":["北京","上海"],"gender":"male","name":"jack"}]
}

func main() {
	demoStruct()
	demoMap()
	demoSlice()
}
