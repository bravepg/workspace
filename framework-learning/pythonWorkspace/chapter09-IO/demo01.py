# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-05 20:19:57
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-10-12 14:42:44

# 以读文件的模式打开一个文件对象
# try:
#     f = open('./test.txt', 'r')
#     print f.read()
# finally:
#     if f:
#         f.close()

# 更简单的写法
with open('./test.txt', 'r') as f:
    print f.read()

# 读取二进制文件
# with open('./yuner.jpg', 'rb') as f:
#     print f.read()

# f = open('./test2.txt', 'rb')
# u = f.read().decode('utf8')
# print u
# 更简单的写法
import codecs
with codecs.open('./test2.txt', 'r', 'utf8') as f:
    print f.read()