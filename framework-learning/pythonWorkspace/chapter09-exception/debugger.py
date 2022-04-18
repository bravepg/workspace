# 调试
# 第一种方法 print
# def foo(s):
#     n = int(s)
#     print('>>> n = %d' % n)
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
# print(10 / n)

# 第四种方法 pdb
# python3 -m pdb debugger.py
# 单步调试，过于繁琐
# s = '0'
# n = int(s)
# print(10 / n)

# 第五种方法 pdb.set_trace()
import pdb
s = '0'
n = int(s)
pdb.set_trace() # 运行到这里会自动暂停
print(10 / n)
