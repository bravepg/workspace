package main

import (
	"fmt"
	"go_code/chapter09-struct/factory/model"
)

func main() {
	var stu1 = model.NewStudent("anne", 18)

	fmt.Println(stu1.Name, stu1.GetAge())
}
