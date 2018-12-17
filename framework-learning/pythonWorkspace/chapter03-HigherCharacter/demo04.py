# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-17 18:42:57
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-17 19:02:21

# 生成器（Generator）一边循环一边计算的机制
# 创建generator的方法，将列表生成式的[]换成()
print ([x * x for x in range(1, 10)]) # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
g = (x * x for x in range(1, 10))
print g  # <generator object <genexpr> at 0x104feab40>

# 如何打印generator的每一个元素呢？
print(g.next())
print(g.next())
print(g.next())
print(g.next())
print(g.next())
print(g.next())
print(g.next())
print(g.next())
print(g.next())
# print(g.next())

# 通过next方法直到计算最后一个元素

# generator非常强大，如果算法比较复杂，用类似列表生成式的for循环无法实现的时候，还可以用函数来实现
def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        print b
        a, b = b, a + b
        n = n + 1

print(fib(6))


# 上面的代码，是从第一个元素开始，推算出后续任意的元素，这种逻辑类似generator
# 想把其变成generator函数只需将print b换成yield b
def fib02(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n = n + 1
for n in fib02(6):
    print n

# generator是十分强大的工具对于函数改成的generator来说，
# 遇到return语句或者执行到函数体最后一行语句，就是结束generator的指令，for循环随之结束