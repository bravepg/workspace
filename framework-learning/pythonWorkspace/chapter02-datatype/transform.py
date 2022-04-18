# 将 x 转换为一个整数
print(int('1', 10)) # 1
# print(int('1a', 10)) # 会报错

# 将对象 x 转换为字符串
print(str(False)) # False

# 将对象 x 转换为表达式字符串
print(repr(False)) # False

# 用来计算在字符串中的有效 python 表达式，并返回一个对象
eval("print(1)") # 1

# 将序列 s 转换为一个元组
print(tuple([1, 2, 3])) # (1, 2, 3)

# 将序列 s 转换为一个列表
print(list((1, 2, 3))) # [1, 2, 3]

# 转换为可变集合
print(set((1, 2, 3))) # {1, 2, 3}

# 创建一个字典
print(dict({'a': 1})) # {'a': 1}

# 将一个整数转换为一个字符
print(chr(99)) # c

# 将一个字符转换为整数
print(ord("中")) # 20013

# 将数据转换为布尔值
# 空元组、空列表、空字典、0、None 均为 False
print(bool(0), bool(None), bool([]), bool(['a'])) # False False False True
