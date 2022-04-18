package utils

import "fmt"

func Calc(f1 float64, f2 float64, operator byte) float64 {
	var res float64

	switch operator {
	case '+':
		res = f1 + f2
	case '-':
		res = f1 - f2
	case '*':
		res = f1 * f2
	case '/':
		res = f1 / f2
	default:
		fmt.Println("错误的符号")
	}

	return res
}
