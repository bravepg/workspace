# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-23 16:54:22
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-24 10:55:36
class Student(object):
    pass
bart = Student()
print(bart)
print(Student)
bart.name = 'Bart Simpson'
print(bart.name)

class Student(object):
    def __init__(self, name, score):
        self.name = name
        self.score = score
bart = Student('Bart Simpson', 60)

def print_score(std):
    print('%s: %s' % (std.name, std.score))
print_score(bart)