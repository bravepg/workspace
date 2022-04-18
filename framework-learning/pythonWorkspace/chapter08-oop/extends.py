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
dog.run() # Animal is running...
cat.run() # Animal is running...

class Dog(Animal):
    def run(self):
        print('Dog is running...')

class Cat(Animal):
    def run(self):
        print('Cat is running...')

dog = Dog()
cat = Cat()
dog.run() # Dog is running...
cat.run() # Cat is running...
print(isinstance(dog, Dog)) # True
print(isinstance(dog, Animal)) # True
