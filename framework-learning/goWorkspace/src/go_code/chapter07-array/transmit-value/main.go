package main

import "fmt"

func demo(arr [3]int) {
	fmt.Printf("值传递，arr 指针的地址是 %p\n", &arr) // 值传递，arr 指针的地址是 0x14000134018
	arr[0] = 88
}

func demo2(arr *[3]int) {
	fmt.Printf("引用传递，arr 指针的地址是 %p, arr 的值是 %p\n", &arr, arr) // 引用传递，arr 指针的地址是 0x14000122020, arr 的值是 0x14000134000
	(*arr)[0] = 88
}

func main() {
	var arr [3]int = [3]int{11, 22, 33}

	demo(arr)
	fmt.Println("arr =", arr) // arr = [11 22 33]

	demo2(&arr)
	fmt.Printf("arr 地址是 %p\n", &arr) // arr 地址是 0x14000134000
	fmt.Println("arr =", arr)        // arr = [88 22 33]
}
