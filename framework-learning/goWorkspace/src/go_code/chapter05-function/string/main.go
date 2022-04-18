package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	// 统计字符串长度，按字节
	// go 的编码统一为 utf8，字母和数字占一个字节，汉字占 3 个字节
	str1 := "hello，北京"
	fmt.Println(len(str1)) // 14

	// 使用 []rune 切片遍历带有中文的字符串
	str2 := []rune(str1)
	for i := 0; i < len(str2); i++ {
		fmt.Printf("str2[i] = %c\n", str2[i])
	}

	// 字符串转整数
	n, err := strconv.Atoi("12")
	fmt.Println("字符串转整数", n, err) // 字符串转整数 12 <nil>

	// 整数转字符串
	str3 := strconv.Itoa(123)
	fmt.Printf("整数转字符串 %v, %T\n", str3, str3) // 整数转字符串 123

	// 字符串转 []byte （切片）
	var bytes = []byte("hello")
	fmt.Printf("bytes = %v\n", bytes) // bytes = [104 101 108 108 111]

	// []byte 转字符串
	str4 := string([]byte{97, 98, 99})
	fmt.Printf("str4 = %v\n", str4) // str4 = abc

	// 10 进制转 2、8、16 进制
	str5 := strconv.FormatInt(123, 2)
	fmt.Printf("123 对应的二进制是 = %v\n", str5) // 123 对应的二进制是 = 1111011
	str6 := strconv.FormatInt(123, 16)
	fmt.Printf("123 对应的十六进制是 = %v\n", str6) // 123 对应的十六进制是 = 7b

	// 查找子串是否在指定字符串中
	fmt.Printf("b = %v\n", strings.Contains("food", "foo")) // b = true

	// 统计一个字符串中出现的子串的个数
	fmt.Printf("出现了 %v 次 o\n", strings.Count("food", "o")) // 出现了 2 次 o

	// 不区分大小写字符串比较
	fmt.Println(strings.EqualFold("abc", "abc")) // true

	// 返回子串在字符串中第一次的位置，没有会返回 -1
	fmt.Println(strings.Index("ni好北京", "京")) // 8

	// 返回子串在字符串中最后一次的位置，没有会返回 -1
	fmt.Println(strings.LastIndex("京ni好北京", "京")) // 11

	// 将指定字符串替换成另外一个子串（最后的数字代表替换几个，如果为 -1 代表替换全部）
	// 不会改变字符串本身
	fmt.Println(strings.Replace("京ni好北京", "京", "北", -1)) // 北ni好北北

	// 切分字符串，返回字符串数组
	// 不会改变字符串本身
	fmt.Println(strings.Split("hello,world", ",")) // [hello world]

	// 字符串大小写转换
	fmt.Println(strings.ToUpper("abc")) // ABC
}
