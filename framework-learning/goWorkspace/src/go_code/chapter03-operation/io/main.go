package main

import (
	"fmt"
)

func main() {
	var name string
	var age int
	var salary float32
	var isPass bool

	// fmt.Println("enter name: ")
	// fmt.Scanln(&name)

	// fmt.Println("enter age: ")
	// fmt.Scanln(&age)

	// fmt.Println("enter salary: ")
	// fmt.Scanln(&salary)

	// fmt.Println("enter isPass: ")
	// fmt.Scanln(&isPass)
	fmt.Println("enter name, age, salary, isPass: ")
	fmt.Scanf("%s %d %f %t", &name, &age, &salary, &isPass)

	fmt.Printf("name is %v, age is %v, salary is %v, isPass is %v\n", name, age, salary, isPass)
}
