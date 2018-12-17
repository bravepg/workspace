# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-09 10:55:39
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-09 11:19:37

# 无限迭代器 count
import itertools
# natuals = itertools.count(1)
# for n in natuals:
#     print n

# 无限循环 cycle会把传入的一个序列无限循环下去
# cs = itertools.cycle('ABC')
# for c in cs:
#     print c

# 无限循环 repeat()，不过提供第二个参数就可以限定循环次数
# ns = itertools.repeat('A', 10)
# for n in ns:
#     print n

# takewhile 将生成的迭代对象根据条件截取一个有限的序列
natuals = itertools.count(1)
ns = itertools.takewhile(lambda x: x <=10, natuals)
for n in ns:
    print n

# chain()把一组迭代对象串联起来，形成更大的迭代器
for c in itertools.chain('ABC', 'XYZ'):
    print c

# groupby() 把迭代器中相邻的重复元素挑出来放到一起
for key, group in itertools.groupby('AAABBCCAAA'):
    print key, list(group)

# imap()和map()的区别在于，imap()可以作用于无穷序列，并且，如果两个序列的长度不一致，以短的那个为准
for x in itertools.imap(lambda x, y: x * y, [10, 20, 30], itertools.count(1)):
    print x
# imap()相当于实现了惰性计算、map()是立即计算