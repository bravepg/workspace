# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-06 15:23:33
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-06 18:54:32

# 查看当前目录的绝对路径
import os
print os.path.abspath('.')

# 在某个目录下创建新目录
# 首先把新目录的完整路径表示出来
os.path.join('D:/autonomous-learning/pythonWorkspace/chapter09-IO', 'testdir')
# 然后创建一个目录
os.mkdir('D:/autonomous-learning/pythonWorkspace/chapter09-IO/testdir')
# 删掉一个目录
os.rmdir('D:/autonomous-learning/pythonWorkspace/chapter09-IO/testdir')

# 对文件重命名
# os.rename('test02.txt', 'test2.txt')
# 删除文件
# os.remove('test3.txt')

# 过滤文件
print([x for x in os.listdir('.') if not os.path.isdir(x)])


L = []
def search(s):
    for x in os.listdir(s):
        if(os.path.isdir(x)):
            search(os.path.join(s, x))
        if(os.path.isfile(os.path.join(s, x)) and os.path.splitext(x)[1] == '.py'):
            L.append(x)
search(os.path.abspath('.'))
print L