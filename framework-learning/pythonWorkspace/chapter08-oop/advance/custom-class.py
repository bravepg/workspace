# 定制类（Python 中有许多这样有特殊用途的函数，可以帮助我们定制类）

# __str__
from typing import Callable


class Student(object):
    def __init__(self, name):
        self.name = name
print(Student('Michael')) # <__main__.Student object at 0x0000000001E6D4E0>

class Student(object):
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return 'Student object (name: %s)' % self.name

    __repr__ = __str__

print(Student('Michael')) # Student object (name: Michael)

s = Student('Michael')
s               # <__main__.Student object at 0x0000000001E6D4E0>

# 直接显示变量调用的不是 __str__，而是 __repr__，两者的区别是 __str__ 返回用户看到的字符串
# 而 __repr__ 返回程序开发者看到的字符串


# __iter__
class Fib(object):
    def __init__(self):
        self.a, self.b = 0, 1

    def __iter__(self):
        return self

    def __next__(self):
        self.a, self.b = self.b, self.a + self.b
        if self.a > 50:
            raise StopIteration()
        return self.a

for n in Fib():
    print(n)

# __getitem__
# Fib 虽然能作用于 for 循环，看起来和 list 有点类似，但是，把它当成 list 来使用还是不行
# Fib()[5] 'Fib' object does not support indexing
# 要表现得像list那样按照下标取出元素，需要实现 __getitem__() 方法
class Fib(object):
    def __getitem__(self, n):
        a, b = 1, 1
        for x in range(n):
            a, b = b, a + b
        return a
f = Fib()
print(f[10]) # 89

# print(f[:10])  # TypeError: range() integer end argument expected, got slice.
# 但是 Fib 利用切片报错，原因是 __getitem__() 传入的参数可能是 int，也可能是切片对象 slice
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
            print('start', start, stop)
            a, b = 1, 1
            L = []
            for x in range(stop):
                if x >= start:
                    L.append(a)
                a, b = b, a + b
            return L
f = Fib()
print(f[0:10]) # [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

# __getattr__
class Student(object):
    def __init__(self):
        self.name = 'Michael'

    def __getattr__(self, attr):
        if attr == 'age':
            return 25
        if attr == 'score':
            return lambda: 99
        raise AttributeError('\'Student\' object has no attribute \'%s\'' % attr)
s = Student()
print(s.name) # Michael
print(s.age) # 25
print(s.score()) # 99

class Chain(object):
    def __init__(self, path=''):
        self._path = path
    def __getattr__(self, path):
        if(path == 'users'):
            return lambda name : Chain('%s/%s/:user' % (self._path, path))
        return Chain('%s/%s' % (self._path, path))
    def __str__(self):
        return self._path
print(Chain().users('michael').repos) # /users/:user/repos

# __call__
# 带有 __call__ 函数的对象都是 Callable 对象
class Student(object):
    def __init__(self, name):
        self.name = name

    def __call__(self):
        print('My name is %s.' % self.name) # My name is Michael.

s = Student('Michael')
s()

print(callable(s)) # True
