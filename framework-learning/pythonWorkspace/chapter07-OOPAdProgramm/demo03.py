# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-03 14:16:06
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-03 16:05:02

# 定制类（Python中有许多这样有特殊用途的函数，可以帮助我们定制类）

# __str__
class Student(object):
    def __init__(self, name):
        self.name = name
print(Student('Michael')) # <__main__.Student object at 0x0000000001E6D4E0>

class Student(object):
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return 'Student object (name: %s)' % self.name
print Student('Michael') # Student object (name: Michael)

s = Student('Michael')
s               # <__main__.Student object at 0x0000000001E6D4E0>

# 直接显示变量调用的不是__str__，而是__repr__，两者的区别是__str__返回用户看到的字符串
# 而__repr__返回程序开发者看到的字符串


# __iter__
class Fib(object):
    def __init__(self):
        self.a, self.b = 0, 1

    def __iter__(self):
        return self

    def next(self):
        self.a, self.b = self.b, self.a + self.b
        if self.a > 1000:
            raise StopIteration()
        return self.a

for n in Fib():
    print n

# __getitem__
# Fib虽然能作用于for循环，看起来和list有点类似，但是，把它当成list来使用还是不行
# Fib()[5]  'Fib' object does not support indexing
# 要表现得像list那样按照下标取出元素，需要实现__getitem__()方法
class Fib(object):
    def __getitem__(self, n):
        a, b = 1, 1
        for x in range(n):
            a, b = b, a + b
        return a
f = Fib()
print(f[10])

# print(f[:10])  # TypeError: range() integer end argument expected, got slice.
# 但是Fib利用切片报错，原因是__getitem__()传入的参数可能是int，也可能是切片对象slice
class Fib(object):
    def __getitem__(self, n):
        if isinstance(n, int):
            a, b = 1, 1
            for x in range(n):
                a, b = b, a + b
            return a
        if isinstance(n, slice):
            start = n.start
            stop = n.stop
            a, b = 1, 1
            L = []
            for x in range(stop):
                if x >= start:
                    L.append(a)
                a, b = b, a + b
            return L
f = Fib()
print(f[:10]) # [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

# __getattr__
class Student(object):
    def __init__(self):
        self.name = 'Michael'

    def __getattr__(self, attr):
        if attr == 'age':
            return 25
        if attr == 'score':
            return lambda : 99
        raise AttributeError('\'Student\' object has no attribute \'%s\'' % attr)
s = Student()
print(s.name)
print(s.age)
print(s.score())

class Chain(object):
    def __init__(self, path=''):
        self._path = path
    def __getattr__(self, path):
        if(path == 'users'):
            return lambda name : Chain('%s/%s/:user' % (self._path, path))
        return Chain('%s/%s' % (self._path, path))
    def __str__(self):
        return self._path
print(Chain().users('michael').repos)

# __call__
class Student(object):
    def __init__(self, name):
        self.name = name

    def __call__(self):
        print('My name is %s.' % self.name)
s = Student('Michael')
s()