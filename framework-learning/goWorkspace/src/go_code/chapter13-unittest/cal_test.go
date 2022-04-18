package main

import (
	"testing"
)

// 编写测试用例
func TestAddUper(t *testing.T) {

	// 调用
	res := addUper(10)
	if res != 55 {
		// fmt.Printf("AddUpder(10) 执行错误，期望值 = %v, 实际值 = %v\n", 55, res)
		t.Fatalf("AddUpder(10) 执行错误，期望值 = %v, 实际值 = %v\n", 55, res)
	}
	// 如果正确，输出日志
	t.Logf("AddUpder(10) 执行正确")
}
