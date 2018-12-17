# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-22 10:55:54
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-22 17:06:44
def lazy_sum(*args):
    def sum():
        ax = 0
        for n in args:
            ax = ax + n
        return ax
    return sum

f = lazy_sum(1, 3, 5, 7, 9)
print(f())

# 再注意一点，当我们调用lazy_sum时，每次调用都会返回一个新的函数
f1 = lazy_sum(1)
f2 = lazy_sum(1)
print(f1 == f2)

# 注意闭包
def count():
    fs = []
    for i in range(1, 4):
        def f():
            return i * i
        fs.append(f)
    return fs
f1, f2, f3 = count()
print(f1())   # 9
print(f2())   # 9
print(f3())   # 9

def count():
    fs = []
    for i in range(1, 4):
        def f(j):
            def g():
                return j * j
            return g
        fs.append(f(i))
    return fs
f1, f2, f3 = count()
print(f1())   # 1
print(f2())   # 4
print(f3())   # 9