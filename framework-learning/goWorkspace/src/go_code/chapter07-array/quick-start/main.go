package main

import "fmt"

func main() {
	// 定义一个数组
	var hens [6]float64

	// 给数组中每个元素赋值
	hens[0] = 1.0
	hens[1] = 2.0
	hens[2] = 3.0
	hens[3] = 4.0
	hens[4] = 5.0
	hens[5] = 6.0

	totalWeight := 0.0

	// 累加数组中元素
	for i := 0; i < len(hens); i++ {
		totalWeight += hens[i]
	}

	averageWeight := fmt.Sprintf("%.2f", totalWeight/float64(len(hens)))

	fmt.Printf("averageWeight = %v\n", averageWeight) // averageWeight = 3.50

	fmt.Printf("数组的地址为 = %p, 数组的第一个元素地址为 = %p", &hens, &hens[0]) // 数组的地址为 = 0x1400012e000, 数组的第一个元素地址为 = 0x1400012e000
}
