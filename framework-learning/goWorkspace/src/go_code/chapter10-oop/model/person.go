package model

import "fmt"

type person struct {
	Name   string
	age    int
	salary float64
}

func NewPerson(n string) *person {
	return &person{
		Name: n,
	}
}

func (p *person) SetAge(age int) {
	if age > 0 && age < 150 {
		p.age = age
		return
	}
	fmt.Println("年龄不合法")
}

func (p *person) GetAge() int {
	return p.age
}

func (p *person) SetSalary(salary float64) {
	if salary > 0 {
		p.salary = salary
		return
	}
	fmt.Println("薪水不合法")
}

func (p *person) GetSalary() float64 {
	return p.salary
}
