# 高阶函数（参数和返回值都可以是函数）
# map 函数
def f(x):
    return x * x
# map 返回一个 Iterator
print(map(f, [1, 2, 3, 4, 5])) # <map object at 0x100740c70>
print(list(map(f, [1, 2, 3, 4, 5]))) # [1, 4, 9, 16, 25]

from functools import reduce
# reduce 函数
def fn(x, y):
    return x * 10 + y
print(reduce(fn, [1, 3, 5, 7, 9])) # 13579

# 将 str 转化为 int 的函数
def str2int(s):
    def fn(x, y):
        return x * 10 + y
    def char2num(s):
        return {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}[s]
    return reduce(fn, map(char2num, s))

print(str2int('13579')) # 13579

# 运用 lambda 函数进一步简化成
def char2num(s):
    return {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}[s]
def str2int(s):
    return reduce(lambda x, y: x * 10 + y, map(char2num, s))


def firstNameToHight(s):
    s = s.lower()
    s1 = s[0].upper() + s[1:]
    return s1
print(list(map(firstNameToHight, ['adam', 'LISA', 'barT']))) # ['Adam', 'Lisa', 'Bart']


def accumulate(x, y):
    return x * y

print(reduce(accumulate, [1, 2, 3, 4, 5])) # 120

# filter

# sorted
print(sorted([36, 5, 12, 9, 21]))
# 倒序排序
def reversed_cmp(x, y):
    if x > y:
        return -1
    if x < y:
        return 1
    return 0

print(sorted([36, 5, 12, 9, 21], reversed_cmp))
