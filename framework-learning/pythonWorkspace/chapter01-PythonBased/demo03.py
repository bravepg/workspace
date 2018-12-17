# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-16 15:40:59
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-16 16:12:35

# dict通过key-value形式存储，一个key只能对应一个value，如果多次对一个key放入value，后面的值会把前面的覆盖掉
d = {}
d['Adam'] = 67
print d['Adam']

# 如果key不存在，dict会报错
# 要避免key不存在的错误，一是通过in判断key是否存在，二是通过dict提供的get方法，若不存在，可以返回None，或者自己指定的value
print('Thomas' in d)
d.get('Thomas', -1)
print (d.get('Thomas', -1))

# set和dict类似，也是一组key的集合，但不存储value，由于key不能重复，因此在set中没有重复的key
# 要创建一个set，需要提供list作为输入集合
s = set([1, 2, 3])
print s

# 通过remove方法来删除指定的元素
# set可以做数学意义上的交集、并集等操作
s1 = set([1, 2, 3])
s2 = set([2, 3, 4])
print (s1 & s2)
print (s1 | s2)


# set和dict一样，不可以放入可变对象（dict不可用可变对象作为key）
# 对可变对象进行操作
a = ['c', 'b', 'a']
a.sort()
print a

# 对不可变对象进行操作
str = 'abc'
str1 = str.replace('a', 'A')
print (str)   # abc
print (str1)  # Abc

# 对于不可变对象来说，调用对象自身的任意方法，也不会改变对象自身的内容，相反，会创建新的对象并返回
s1.add((1, 2, 3))
print s1
s1.add([1, 2, 3])    # 会报错
print s1   