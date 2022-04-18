from email.mime import base


class Hello(object):
    def hello(self, name='world'):
        print ('Hello, %s.' % name)

print(type(Hello)) # <class 'type'>
print(type(Hello())) # <class '__main__.Hello'>

# 根据 type 创建 class
# type 函数既可以返回一个对象的类型，又可以创建出新的类型
def fn(self, name='world'):
    print ('Hello, %s.' % name)

Hello1 = type('Hello1', (object,), dict(hello = fn))  # 创建 Hello1 class
print(type(Hello1)) # <class 'type'>
print(type(Hello1())) # <class '__main__.Hello1'>

# metaclass 是类的模版，必须要从 type 派生出来
class ListMetaClass(type):
    def __new__(cls, name, bases, attrs):
        attrs['add'] = lambda self, value: self.append(value)
        return type.__new__(cls, name, bases, attrs)

# 有了 ListMetaClass，在定义类的时候还要指示使用 ListMetaclass 来定制类
class Mylist(list, metaclass=ListMetaClass):
    pass

L = Mylist()
L.append(1)
print(L) # [1]
