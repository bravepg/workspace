package main

import (
	"fmt"
	"strconv"
	_ "unsafe" // 没有使用，但不想去掉，可以在前面加 _
)

func main() {
	var str string = "true"
	var b bool
	// strconv.ParseBool 会返回两个值（value bool, err error）
	// 只关心 value，不关心 err，使用 _ 忽略
	b, _ = strconv.ParseBool(str)

	fmt.Printf("b type %T, v = %v\n", b, b)

	var str2 string = "12345"
	var n int64

	n, _ = strconv.ParseInt(str2, 10, 64)
	n2 := int(n)

	fmt.Printf("n type %T, n = %v\n", n, n)
	fmt.Printf("n2 type %T, n2 = %v\n", n2, n2)

	var str3 string = "123.45"
	var f float64
	f, _ = strconv.ParseFloat(str3, 64)

	fmt.Printf("f type %T, f = %v\n", f, f)
}
