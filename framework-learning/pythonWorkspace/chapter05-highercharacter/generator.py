# 生成器（Generator）一边循环一边计算的机制
# 创建 generator 的方法，将列表生成式的 [] 换成 () 
print([x * x for x in range(1, 10)]) # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
g = (x * x for x in range(1, 10))
print(g)  # <generator object <genexpr> at 0x104feab40>

# 如何打印 generator 的每一个元素呢？
print(next(g))
print(next(g))
print(next(g))
print(next(g))
print(next(g))
print(next(g))
print(next(g))
print(next(g))
print(next(g))
# print(next(g)) # StopIteration

# 通过 next 方法直到计算最后一个元素

# generator 非常强大，如果算法比较复杂，用类似列表生成式的 for 循环无法实现的时候，还可以用函数来实现
def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        # a, b = b, a + b 等价于
        # t = (b, a + b) # t是一个tuple
        # a = t[0]
        # b = t[1]
        print(b)
        a, b = b, a + b
        n = n + 1

print(fib(6))


# 上面的代码，是从第一个元素开始，推算出后续任意的元素，这种逻辑类似 generator
# 想把其变成 generator 函数只需将 print b 换成 yield b
def fib02(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n = n + 1
for n in fib02(6):
    print(n)

# generator 是十分强大的工具
# 对于函数改成的 generator 来说
# 遇到 return 语句或者执行到函数体最后一行语句，就是结束 generator 的指令，for 循环随之结束