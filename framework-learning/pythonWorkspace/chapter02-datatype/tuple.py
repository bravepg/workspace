# tuple 和 list 非常相似，一旦初始化就不可以改变
classmates_tuple = ('Michael', 'Bob')
print(classmates_tuple) # ('Michael', 'Bob')

# 要注意，定义只有 1 个元素的 tuple，应该是 t = (1,) 而不是 t = (1)
t1 = (1,)
print(t1) # (1,)

# tuple 所谓的“不变”，是说 tuple 每个元素的指向不变，比如(1, [2,  3])，对于这样的 tuple 元素，其最后一个值为 list 是可以改变的
t2 = ('a', 'b', ['A', 'B'])
t2[2][0] = 'X'
t2[2][1] = 'Y'
print(t2) # ('a', 'b', ['X', 'Y'])
