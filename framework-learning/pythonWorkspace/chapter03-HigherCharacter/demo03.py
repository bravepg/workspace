# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-17 18:23:56
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-17 18:42:37

# 列表生成式
# 生成list  range(1, 11)

# 如果要生成[1 * 1, 2* 2,.....10 * 10]怎么办？
# 方案1 循环
L = []
for x in range(1, 10):
    L.append(x * x)
print L

# 由于上面利用循环太繁琐，可以利用列表生成式
print([x * x for x in range(1, 10)])
# for循环后面还可以跟if语句
print([x * x for x in range(1, 10) if x % 2 == 0])


# 使用两层循环，可以生成全排列
print([m + n for m in 'ABC' for n in 'XYZ'])

# 一个非常强大的用处，列出当前目录下所有文件和目录名
import os
print([d for d in os.listdir('.')])

# 列表式也可以使用两个变量来生成list
d = {'x': 'A', 'y': 'B', 'z': 'Z'}
print([k + '=' + v for k, v in d.iteritems()])

# 运用列表式。可以快速生成list，可以通过一个list推导出另一个list
array = ["Hello", "World", 18]
print([s.lower() for s in array if isinstance(s, str)])