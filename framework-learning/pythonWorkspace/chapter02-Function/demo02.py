# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-16 20:56:37
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-16 21:08:42

import math
# 定义函数def 如果想定义一个什么也不做的函数，可以使用pass语句
def nop():
    pass   # 缺少了pass语句，代码运行会报错


# 数据类型的检查 isinstance
def my_abs(x):
    if not isinstance(x, (int, float)):
        raise TypeError('bad opera and type')
    if x >= 0:
        return x
    else:
        return -x
#print(my_abs('A'))


# 函数返回多个值
def move(x,  y, step, angle = 0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny

x, y = move(100, 100, 60, math.pi / 6)
print x, y

# 但是，上述结果只是一种假象，Python返回的仍然是单一值
r = move(100, 100, 60, math.pi / 6)
print r
# Python的函数返回多个值其实就是返回一个tuple，可以省略括号，同时使用多个变量接收