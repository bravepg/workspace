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

// 让 Computer 实现 Usb 接口
func (p Computer) Start() {
	fmt.Println("computer start")
}

func (p Computer) Stop() {
	fmt.Println("computer stop")
}

func main() {
	var usbArr [3]Usb
	usbArr[0] = Phone{}
	usbArr[1] = Computer{}

	fmt.Println(usbArr) // [{} {} <nil>]
}
