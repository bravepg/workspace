package model

type student struct {
	Name string
	age  int
}

// 因为 student 首字母是小写，只能在 model 中使用
// 通过工厂模式来解决
func NewStudent(n string, a int) *student {
	return &student{
		Name: n,
		age:  a,
	}
}

// 如果 age 首字母小写，需要提供一个方法将其导出
func (s *student) GetAge() int {
	return s.age
}
