# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-16 20:51:45
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-16 20:55:12


# Python内置函数
print(cmp(1, 2))

# 数据类型转换
print(unicode(100))
print(bool(''))

# 函数名其实就是指向一个函数对象的引用，完全可以把函数名赋给一个变量，相当于给这个函数起了个“别名”
a = abs;
print(a(-1))