# 列表生成式
# 生成list range(1, 11)

# 如何生成 [1 * 1, 2 * 2, ... 10 * 10]
# 方案 1 循环
L = []
for x in range(1, 10):
    L.append(x * x)
print(L) # [1, 4, 9, 16, 25, 36, 49, 64, 81]

# 上面利用循环太繁琐，可以利用列表生成式
print([x * x for x in range(1, 10)]) # [1, 4, 9, 16, 25, 36, 49, 64, 81]
# for 循环后面还可以跟 if 语句
print([x * x for x in range(1, 10) if x % 2 == 0]) # [4, 16, 36, 64]

# 使用两层循环，可以生成全排列
print([m + n for m in 'ABC' for n in 'XYZ']) # ['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']

# 一个非常强大的用处，列出当前目录下所有文件和目录名
import os
print([d for d in os.listdir('.')]) # ['iteration.py', 'generation.py', 'slice.py', 'list-generation.py']

# 列表式也可以使用两个变量来生成 list
d = {'x': 'A', 'y': 'B', 'z': 'Z'}
print([k + '=' + v for k, v in d.items()]) # ['x=A', 'y=B', 'z=Z']

# 运用列表式。可以快速生成 list，可以通过一个 list 推导出另一个 list
array = ["Hello", "World", 18]
print([s.lower() for s in array if isinstance(s, str)]) # ['hello', 'world']
