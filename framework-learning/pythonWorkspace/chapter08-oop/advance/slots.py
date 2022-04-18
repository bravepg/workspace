# 动态给实例绑定属性和方法
class Student(object):
    # 限定实例可以增加的属性
    __slots__ = ('name', 'age', 'set_age')
    pass

s = Student()
# 绑定属性
s.name = 'Michael'
print(s.name) # Michael
# 绑定方法
def set_age(self, age):
    self.age = age;
from types import MethodType
s.set_age = MethodType(set_age, s)
# s.set_age = set_age # 实例绑定方法不可以通过直接赋值的方式
s.set_age(25)
print(s.age) # 25

# 给一个实例绑定的方法，对另一个实例是不起作用的
s2 = Student()
# s2.set_age(25) 报错 
# AttributeError: 'Student' object has no attribute 'set_age'

# 给 class 绑定方法，可以对所有实例生效
def set_score(self, socre):
    self.socre = socre
# Student.set_score = MethodType(set_score, Student)
Student.set_score = set_score # 类绑定方法可以通过直接赋值的方式

# 给 class 绑定方法后，所有实例均可调用
s.set_score(100)
print(s.socre)
