package main

import (
	"fmt"
	"go_code/chapter10-oop/model"
)

func main() {
	p := model.NewPerson("tom")
	p.SetAge(10)
	p.SetSalary(1000)

	fmt.Println(*p) // {tom 10 1000}
}
