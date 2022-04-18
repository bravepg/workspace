# 获取对象信息
print(type(123)) # <class 'int'>
print(type('123')) # <class 'str'>
print(type(None)) # <class 'NoneType'>

# 通过 type 来判断继承关系就不太好判断了，要通过 isinstance
class Animal(object):
    pass

class Dog(Animal):
    pass

class Husky(Dog):
    pass

a = Animal()
d = Dog()
h = Husky()
print(isinstance(h, Husky)) # True
print(isinstance(h, Dog)) # True
print(isinstance(h, Animal)) # True
print(isinstance(d, Husky)) # False

# 同样 isinstance 可以判断变量是否属于基本类型以及是否属于 list 或者 tuple
print(isinstance([1, 2, 3], (list, tuple)))

print(dir('abc'))

# hasattr、getattr、setattr