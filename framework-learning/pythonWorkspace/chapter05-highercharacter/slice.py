# 取一个 list 或 tuple 的部分元素
L = ['Michael', 'Sarah', 'Bob', 'Mary']

# 取前三个元素
# 笨方法
print([L[0], L[1], L[2]]) # ['Michael', 'Sarah', 'Bob']

# python 切片提供了强大的功能
# 0 可以省略
print(L[0:3]) # ['Michael', 'Sarah', 'Bob']

# python 切片同样支持负数切片
print(L[-2:]) # ['Bob', 'Mary']

# 切片甚至可以什么都不用写（复制一个list）
print(L[:]) # ['Michael', 'Sarah', 'Bob', 'Mary']

# 切片进行反转
print(L[::-1]) # ['Mary', 'Bob', 'Sarah', 'Michael']

L2 = L[0:3]
L2[0] = 'Gao'
# 切片之间互相隔离，不相互影响
print(L, L2) # ['Michael', 'Sarah', 'Bob', 'Mary'] ['Gao', 'Sarah', 'Bob']
