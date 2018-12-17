# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-05 15:41:51
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-05 15:57:05

# 调试
# 第一种方法 print
# def foo(s):
#     n = int(s)
#     print '>>>n = %d' % n
#     return 10 / n
# def main():
#     foo('0')
# main()

# 第二种方法 assert
# def foo(s):
#     n = int(s)
#     assert n != 0, 'n is zero'
#     return 10 / n

# def main():
#     foo('0')
# main()

# 第三种方法 logging
# import logging
# logging.basicConfig(level=logging.INFO)
# s = '0'
# n = int(s)
# logging.info('n = %d', n)
# print 10 / n

# 第四种方法 pdb
s = '0'
n = int(s)
print 10 / n