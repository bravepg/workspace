# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-17 13:16:57
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-17 16:56:34

# 取一个list或tuple的部分元素
L = ['Michael', 'Sarah', 'Bob', 'Mary']

# 取前三个元素
# 笨方法
print [L[0], L[1], L[2]]


# Python切片提供了强大的功能
print L[0:3]   # 0可以省略


# Python切片同样支持负数切片
L[-2:]

# 切片甚至可以什么都不用写（复制一个list）
L[:]

# 同样 tuple、字符串、Unicode字符串也可以看做一种list，同样支持切片操作