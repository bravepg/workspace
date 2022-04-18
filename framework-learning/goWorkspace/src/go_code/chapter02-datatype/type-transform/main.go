package main

import (
	"fmt"
	_ "unsafe" // 没有使用，但不想去掉，可以在前面加 _
)

func main() {
	var num int32 = 123

	var f1 float32 = float32(num)

	var num2 int64 = int64(123) // 低精度转到高精度也需要显示转换

	fmt.Printf("num=%v, num2=%v, f1=%v", num, num2, f1) // num=123, num2=123, f1=123

	var num3 int64 = 999999
	var num4 = int8(num3)
	fmt.Println("num4 = ", num4)
}
