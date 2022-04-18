# list 是 python 内置的一种数据类型，是一种有序的集合
# 可以利用索引来访问 list 中每一个位置的元素，超出范围时，会报出 IndexError 错误
# python 可以利用 -1 做索引直接获取最后一个元素
classmates = ['Michael', 'Bob', 'John']
print(classmates) # ['Michael', 'Bob', 'John']
print(classmates[1:]) # ['Bob', 'John']

# 可以往 list 中追加元素到末尾 append 方法
classmates.append('gao')
print(classmates) # ['Michael', 'Bob', 'John', 'gao']

# 在指定位置插入元素insert(i)
# 删除list末尾的元素pop()
# 删除指定位置的元素pop(i)
classmates.pop(1)
print(classmates)
