class Student(object):
    pass

bart = Student()
print(bart) # <__main__.Student object at 0x104fccf10>
print(Student) # <class '__main__.Student'>

bart.name = 'Bart Simpson'
print(bart.name) # Bart Simpson

class Student(object):
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def print_score(self):
        print('%s: %s' % (self.name, self.score)) # Bart Simpson: 60

bart = Student('Bart Simpson', 60)
bart.print_score()
