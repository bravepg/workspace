package main

import (
	"fmt"
	"strconv"
	_ "unsafe" // 没有使用，但不想去掉，可以在前面加 _
)

func main() {
	var n int = 99
	var f float64 = 23.456
	var b bool = false
	var c byte = 'h'

	var str string

	str = fmt.Sprintf("%d", n)
	fmt.Printf("str type %T, str = %q\n", str, str)

	str = fmt.Sprintf("%f", f)
	fmt.Printf("str type %T, str = %q\n", str, str)

	str = fmt.Sprintf("%t", b)
	fmt.Printf("str type %T, str = %q\n", str, str)

	str = fmt.Sprintf("%c", c)
	fmt.Printf("str type %T, str = %q\n", str, str)

	var n2 int = 99
	var f2 float64 = 23.456
	var b2 bool = false

	str = strconv.FormatInt(int64(n2), 10)
	fmt.Printf("str type %T, str = %q\n", str, str)

	str = strconv.Itoa(n2)
	fmt.Printf("str type %T, str = %q\n", str, str)

	// f 表示输出格式
	// 10 表示保留几位小数
	// 64 表示这个小数是 float64
	str = strconv.FormatFloat(f2, 'f', 10, 64)
	fmt.Printf("str type %T, str = %q\n", str, str)

	str = strconv.FormatBool(b2)
	fmt.Printf("str type %T, str = %q\n", str, str)
}
