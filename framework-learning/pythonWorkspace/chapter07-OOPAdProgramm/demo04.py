# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-03 16:17:03
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-04 20:26:38

class Hello(object):
    def hello(self, name='world'):
        print ('Hello, %s.' % name)


def fn(self, name='world'):
    print ('Hello, %s.' % name)

# Hello = type('Hello', (object,), dict(hello=fn))  # 创建Hello class


class Student(object):
    def __init__(self,name,age,school):
        self.__name = name
        self.__age = age
        self.__school = school

    def __str__(self):
        return ('我是%s,我%s 岁了,在%s 上学.' % (self.__name,self.__age,self.__school))


class XiaoMing(Student):
    def __init__(self,name,age,school):
        Student.__init__(self, name, age, school)
    # ''' 覆写父类 __str__方法'''
    # def __str__(self):
    #     return ('我是%s,我%s 岁了,在%s 上学.' %(self.__name,self.__age,self.__school))
# ''' 接受 Student 任何子类对象'''

def fun(stu):
    print stu

# ###测试
xm = XiaoMing('小明',25,'北大')
fun(xm)
