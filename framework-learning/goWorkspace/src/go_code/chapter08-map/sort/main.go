package main

import (
	"fmt"
	"sort"
)

func main() {
	map1 := map[int]int{
		1: 11,
		4: 44,
		3: 33,
		9: 99,
		6: 66,
	}

	// map 排序的方式
	// 1. 先将 map 的 key 存入切片中
	// 2. 将切片进行排序
	// 3. 遍历切片输出 map

	var keys []int
	for k := range map1 {
		keys = append(keys, k)
	}

	// 排序
	sort.Ints(keys)
	fmt.Println(keys) // [1 3 4 6 9]

	// 遍历
	for _, v := range keys {
		fmt.Printf("map key = %v, value = %v\n", v, map1[v])
		// map key = 1, value = 11
		// map key = 3, value = 33
		// map key = 4, value = 44
		// map key = 6, value = 66
		// map key = 9, value = 99
	}
}
