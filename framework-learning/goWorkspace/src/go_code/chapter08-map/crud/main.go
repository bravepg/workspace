package main

import "fmt"

func main() {
	cities := map[string]string{
		"no1": "beijing",
		"no2": "shanghai",
	}

	fmt.Println("map 的长度是", len(cities))

	// 新增
	cities["no3"] = "hangzhou"
	fmt.Println(cities) // map[no1:beijing no2:shanghai no3:hangzhou]

	// 修改
	cities["no2"] = "shenzhen"
	fmt.Println(cities) // map[no1:beijing no2:shenzhen no3:hangzhou]

	// 查找（直接取 key）
	val, res := cities["no1"]
	if res {
		fmt.Println("val, res", val, res) // val, res beijing true
	}

	// 删除
	delete(cities, "no2")
	fmt.Println(cities) // map[no1:beijing no3:hangzhou]
	// 删除不存在的 key，不会报错，只是无效
	delete(cities, "no2")
	fmt.Println(cities) // map[no1:beijing no3:hangzhou]
	// 如何删除全部的 key
	// 第一种方式，遍历所有的 key，逐一删除
	for _, v := range cities {
		fmt.Println(v)
		// hangzhou
		// beijing
	}
	// 第二种方式，make 一个新的空间
	cities = make(map[string]string)
	fmt.Println(cities) // map[]
}
