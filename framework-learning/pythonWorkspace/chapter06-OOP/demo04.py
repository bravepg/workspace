# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-24 13:36:13
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-24 13:53:51

# 获取对象信息
print(type(123))
print(type('123'))
print(type(None))

# 通过type来判断继承关系 就不太好判断了要通过isinstance
class Animal(object):
    pass

class Dog(Animal):
    pass

class Husky(Dog):
    pass

a = Animal()
d = Dog()
h = Husky()
print(isinstance(h, Husky))
print(isinstance(h, Dog))
print(isinstance(h, Animal))
print(isinstance(d, Husky))

# 同样isinstance可以判断变量是否属于基本类型以及是否属于list或者tuple
print(isinstance([1, 2, 3], (list, tuple)))

print(dir('abc'))

# hasattr、getattr、setattr