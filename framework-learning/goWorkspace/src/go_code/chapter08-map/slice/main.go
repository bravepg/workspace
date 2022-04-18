package main

import "fmt"

func main() {
	// 声明一个 map 切片并分配内存空间
	var infos []map[string]string = make([]map[string]string, 2)

	if infos[0] == nil {
		infos[0] = map[string]string{
			"name1": "1",
			"age1":  "1",
		}
	}

	if infos[1] == nil {
		infos[1] = map[string]string{
			"name2": "2",
			"age2":  "2",
		}
	}

	fmt.Println(infos) // [map[age1:1 name1:1] map[age2:2 name2:2]]

	// if infos[2] == nil {
	// }
	// 由于刚开始分配了 2，使用超过 1 的数字就会发生越界，需要使用切片的 append
	newInfo := map[string]string{
		"name3": "3",
		"age3":  "3",
		"sex":   "male",
	}

	infos = append(infos, newInfo)
	fmt.Println(infos) // [map[age1:1 name1:1] map[age2:2 name2:2] map[age3:3 name3:3 sex:male]]
}
