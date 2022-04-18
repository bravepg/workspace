package main

import "fmt"

func main() {
	// 演示切片的基本使用
	var intArr [5]int = [...]int{1, 2, 3, 4, 5}
	// 使用切片的第一种方式（定义一个切片，让切片取引用一个已经创建好的数组）
	// 定义一个切片
	// slice 就是切片名
	// intArr[1:3] 表示 slice 引用 intArr 这个数组
	// 起始下标为 1，最终下标为 3（不包括 3）
	slice := intArr[1:3]

	fmt.Println("intArr =", intArr)         // intArr = [1 2 3 4 5]
	fmt.Println("intArr 的容量是", cap(intArr)) // intArr 的容量是 5
	fmt.Println("slice 的元素是", slice)        // slice 的元素是 [2 3]
	fmt.Println("slice 的元素个数为", len(slice)) // slice 的元素个数为 2
	// 切片的容量是可以动态变化的
	fmt.Println("slice 的容量是", cap(slice)) // slice 的容量是 4

	fmt.Printf("intArr[1] 的地址是 %p\n", &intArr[1])                      // intArr[1] 的地址是 0x1400012e008
	fmt.Printf("slice 的地址是 %p, slice 的第一个元素是 %p\n", &slice, &slice[0]) // slice 的地址是 0x140000b0000, slice 的第一个元素是 0x140000ae008

	// 使用切片的第二种方式（通过 make 来创建切片）
	// var 切片名 []type = make([] type, len, [cap])
	// type 切片类型，len 切片长度，cap（可选，切片容量）
	var slice2 []int = make([]int, 5, 10)
	fmt.Println("slice2 =", slice2) // slice2 = [0 0 0 0 0]

	// 使用切片的第三种方式
	var slice3 []string = []string{"tom", "jack", "mary"}
	fmt.Println("slice3 的元素个数为", len(slice3)) // slice3 的元素个数为 3
	// 切片的容量是可以动态变化的
	fmt.Println("slice3 的容量是", cap(slice3)) // slice3 的容量是 3

	for _, v := range slice3 {
		fmt.Printf("v = %v\n", v)
	}
}
