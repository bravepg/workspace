# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-17 16:56:51
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-17 18:23:35

# Python 的for循环抽象程度要高于Java的for循环，Python的for循环不仅可以作用在list或者tuple上
# 还可以作用于其他可迭代对象上
d = {'a': 1, 'b': 2, 'c': 3}
for key in d:
    print key  # a, c, b 由于dict存储不是按照list方式，所以，迭代出的结果顺序很可能不一样


# 如果要迭代value：for value in d.itervalues()
# 如果要同时迭代key和value： for k, v in d.iteritems()

# 由于字符串也是可迭代对象
for ch in 'ABC':
    print ch


# 如何判断一个对象是否可迭代，通过collections模块的Iterable类型判断
from collections import Iterable
print(isinstance('abc', Iterable))
print(isinstance([1, 2, 3], Iterable))
print(isinstance(123, Iterable))

# list 实现类似Java那样的下标循环（enumerate函数可以把一个list变成索引-元素对）
for i, value in enumerate(['A', 'B', 'C']):
    print i, value

# 类似的
for x, y in [(1, 2), (3, 4), (5, 6)]:
    print x, y