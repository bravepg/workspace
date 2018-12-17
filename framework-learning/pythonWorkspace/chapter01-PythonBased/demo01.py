# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-16 14:51:23
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-10-11 14:30:43

# list是Python内置的一种数据类型，是一种有序的集合
classmates = ['Michael', 'Bob']
print classmates


# 可以利用索引来访问list中每一个位置的元素，超出范围时，会报出IndexError错误，同时
# Python可以利用-1做索引直接获取最后一个元素


# 可以往list中追加元素到末尾 append方法
classmates.append('gao')
print classmates

# 在指定位置插入元素insert(i)
# 删除list末尾的元素pop()
# 删除指定位置的元素pop(i)

classmates.pop(1)
print classmates

# list中的元素类型可以不同，也可以是另外一个list


# tuple和list非常相似，一旦初始化就不可以改变
classmates_tuple = ('Michael', 'Bob')
print classmates_tuple

# 要注意，定义只有1个元素的tuple，应该是t=(1,)而不是t=(1)

# tuple所谓的“不变”，是说tuple每个元素的指向不变，比如(1, [2, 3])，对于这样的tuple元素，其最后一个值为list是可以改变的