# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-24 11:17:14
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-24 13:25:22

# 继承和多态
class Animal(object):
    def run(self):
        print('Animal is running...')

class Dog(Animal):
    pass

class Cat(Animal):
    pass

dog = Dog()
cat = Cat()
dog.run()
cat.run()

class Dog(Animal):
    def run(self):
        print('Dog is running...')

class Cat(Animal):
    def run(self):
        print('Cat is running...')

dog = Dog()
cat = Cat()
dog.run()
cat.run()
print(isinstance(dog, Dog))
print(isinstance(dog, Animal))