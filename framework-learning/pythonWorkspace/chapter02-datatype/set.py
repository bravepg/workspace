# set 和 dict 类似，也是一组 key 的集合，但不存储 value，由于 key 不能重复，因此在 set 中没有重复的 key
# 要创建一个 set，需要提供 list 作为输入集合
s = set([1, 2, 3])
print(s) # {1, 2, 3}

# 通过 remove 方法来删除指定的元素
# set 可以做数学意义上的交集、并集等操作
s1 = set([1, 2, 3])
s2 = set([2, 3, 4])
print (s1 & s2) # {2, 3}
print (s1 | s2) # {1, 2, 3, 4}


# set 和 dict一样，不可以放入可变对象（dict 不可用可变对象作为 key）
# 对可变对象进行操作
a = ['c', 'b', 'a']
a.sort()
print(a) # ['a', 'b', 'c']

# 对不可变对象进行操作
str = 'abc'
str1 = str.replace('a', 'A')
print (str)   # abc
print (str1)  # Abc

# 对于不可变对象来说，调用对象自身的任意方法，也不会改变对象自身的内容，相反，会创建新的对象并返回
s1.add((1, 2, 3)) # {1, 2, 3, (1, 2, 3)}
print(s1)
s1.add([1, 2, 3])    # 会报错
print(s1)
