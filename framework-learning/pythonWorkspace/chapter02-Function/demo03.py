# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-16 21:08:58
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-18 19:24:06

# 参数类型（必选参数、默认参数、可变参数、关键字参数）
def power(x, n):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s
print(power(5, 2))

# print(power(5)) 由于参数为两个所以会调用失败，这个时候要考虑默认参数

def power02(x, n=2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s
print(power02(5, n=3))

# 必选参数在前，默认参数在后（变化小的参数可以作为默认参数）



# 注意：默认参数的坑
def add_end(L=[]):
    L.append('End')
    return L
print(add_end([1, 2]))        # [1, 2, 'End']
print(add_end(['a', 'b']))    # ['a', 'b', 'End']

print(add_end())   # ['End']
print(add_end())   # ['End', 'End']
print(add_end())   # ['End', 'End', 'End']

# 出现上面的问题，一定要记住，默认参数必须指向不可变的对象
def add_end02(L=None):
    if L is None:
        L = []
    L.append('End')
    return L
print(add_end02())   # ['End']
print(add_end02())   # ['End']


# 可变参数
def calc(numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum
print(calc([1, 2, 3]))  # 如果利用可变参数，可以简化为calc(1, 2, 3)

def calc02(*numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum
print(calc02(1, 2))
print(calc02())
print(calc02(*[1, 2]))


# 关键字参数
# 可变参数允许传入0个或者任意个参数，在调用的时候自动组装为一个tuple，关键字参数允许传入0个或者任意个含参数名的参数，
# 在函数内部自动组装成dict

def person(name, age, **key):
    print 'name: ', name, 'age: ', age, 'other: ', key

print(person('Michael', 30))
print(person('Michael', 30, city="beijing"))
print(person('Michael', 30, **{'city': 'Beijing', 'job': 'Engineer'}))

# 参数组合
# 顺序：必选参数、默认参数、可选参数、关键字参数
def func(a, b, c=0, *args, **kw):
    print 'a= ', a, 'b= ', b, 'c=', c, 'args=', args, 'kw', kw
print(func(1, 2))
print(func(1, 2, c=3))
print(func(1, 2, 3, 'a', 'b'))
print(func(1, 2, 3, 'a', 'b', x=99))
    
