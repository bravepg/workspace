package main

import "fmt"

type Usb interface {
	// 定义两个没有实现的方法
	Start()
	Stop()
}

type Phone struct {
}

// 让 Phone 实现 Usb 接口
func (p Phone) Start() {
	fmt.Println("start")
}

func (p Phone) Stop() {
	fmt.Println("stop")
}

type Computer struct {
}

// 只要是实现了 Usb 接口的结构体都可以传入
func (c Computer) Work(usb Usb) {
	usb.Start()
	usb.Stop()
}

// 只要是自定义数据类型，就可以实现接口，不仅仅是结构体类型
type interger int

func (i interger) Start() {
	fmt.Println("interger start")
}

func (i interger) Stop() {
	fmt.Println("interger stop")
}

func main() {
	c := Computer{}
	c.Work(Phone{}) // start stop

	var i interger = 10
	var usb Usb = i
	fmt.Println(usb) // 10
}
