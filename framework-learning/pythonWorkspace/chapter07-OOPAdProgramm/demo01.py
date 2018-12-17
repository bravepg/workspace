# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-24 15:39:57
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-03 11:21:25

# 动态给实例绑定属性和方法
class Student(object):
    pass

s = Student()
# 绑定属性
s.name = 'Michael'
print s.name
# 绑定方法
def set_age(self, age):
    self.age = age;
from types import MethodType
s.set_age = MethodType(set_age, s, Student)
s.set_age(25)
print(s.age)

# 给一个实例绑定的方法，对另一个实例是不起作用的
s2 = Student()
# s2.set_age(25) 报错 
# AttributeError: 'Student' object has no attribute 'set_age'

# 给class绑定方法
def set_score(self, socre):
    self.socre = socre
Student.set_score = MethodType(set_score, None, Student)

# 给class绑定方法后，所有实例均可调用
s.set_score(100)
print(s.socre)