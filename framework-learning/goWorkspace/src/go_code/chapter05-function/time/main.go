package main

import (
	"fmt"
	"time"
)

func main() {
	// 获取当前时间
	now := time.Now()
	fmt.Printf("now = %v, now type = %T\n", now, now) // now = 2022-03-15 21:57:52.862632 +0800 CST m=+0.000066793, now type = time.Time

	// 通过 now 获取到年月日，时分秒
	fmt.Printf("%02d-%02d-%02d %02d:%02d:%02d\n", now.Year(), now.Month(), now.Day(), now.Hour(), now.Minute(), now.Second()) // 2022-3-15 22:07:10

	// 格式化日期时间（数字必须要固定）
	fmt.Println(now.Format("2006-01-02 15:04:05"))

	// 休眠 0.1 秒打印
	var i int = 0
	for {
		i++
		fmt.Println(i)
		time.Sleep(time.Millisecond * 1000)
		if i > 2 {
			break
		}
	}

	// Unix 和 unixNano
	fmt.Printf("unix 时间戳 = %v, unixnano 时间戳 = %v", now.Unix(), now.UnixNano())
}
