# python 的 for 循环抽象程度要高于 java 的 for 循环，python 的 for 循环不仅可以作用在 list 或者 tuple 上
# 还可以作用于其他可迭代对象上
d = {'a': 1, 'b': 2, 'c': 3}
for key in d:
    # 由于 dict 存储不是按照 list 方式，所以，迭代出的结果顺序很可能不一样
    # 如果要迭代 value: for value in d.values()
    # 如果要同时迭代 key 和 value: for k, v in d.items()
    print(key)  # a, c, b


# 由于字符串也是可迭代对象
for ch in 'ABC':
    print(ch) # A B C


# 如何判断一个对象是否可迭代，通过 collections 模块的 Iterable 类型判断
# 可以直接作用于 for 循环的数据类型有以下几类
# 一类是集合数据类型，包括 list、tuple、dict、set、str
# 一类是 generator，包括生成器和带 yield 的 generator function
from collections.abc import Iterable, Iterator
print(isinstance('abc', Iterable)) # True
print(isinstance([1, 2, 3], Iterable)) # True
print(isinstance(123, Iterable)) # False

# 生成器都是 Iterator 对象，但是 list、dict、str 虽然是 Iterable，但却不是 Iterator
# 可以使用 iter 函数，将其变成为 Iterator
print(isinstance('abc', Iterator)) # False
print(isinstance(iter('abc'), Iterator)) # True
print(isinstance(iter([1, 2, 3]), Iterator)) # True

# list 实现类似 java 那样的下标循环（enumerate 函数可以把一个 list 变成索引-元素对）
for i, value in enumerate(['A', 'B', 'C']):
    print(i, value) # 0 A 1 B 2 C

# 上面的 for 循环里，同时引用了两个变量，类似的
for x, y in [(1, 3), (3, 6), (5, 9)]:
    print(x, y) # 1 3 3 6 5 9
