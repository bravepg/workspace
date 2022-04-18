package main

import "fmt"

type Stu struct {
	Name string
	Age  int
}

func modifyUser(users map[string]map[string]string, name string) {
	_, res := users[name]
	if res {
		// 如果 name 存在，则修改密码
		users[name]["pwd"] = "888"
		return
	}
	users[name] = map[string]string{
		"nickname": name + "1",
		"pwd":      "pwd",
	}
}

func main() {
	// value 为结构体
	students := make(map[string]Stu)

	stu1 := Stu{"tom", 10}

	students["no1"] = stu1
	fmt.Println(students)

	// 遍历学生
	for key, v := range students {
		fmt.Println("学生的编号是:", key)
		fmt.Println("学生的姓名是:", v.Name)
		fmt.Println("学生的年龄是:", v.Age)
	}

	users := make(map[string]map[string]string)

	// users["tom"] = make(map[string]string, 2)
	// users["tom"]["nickname"] = "tom1"
	// users["tom"]["pwd"] = "pwd"
	users["tom"] = map[string]string{
		"nickname": "tom1",
		"pwd":      "pwd",
	}

	modifyUser(users, "tom")
	modifyUser(users, "mary")
	fmt.Println(users) // map[mary:map[nickname:mary1 pwd:pwd] tom:map[nickname:tom1 pwd:888]]
}
