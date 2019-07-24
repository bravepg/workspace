# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-24 11:05:39
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-01-24 11:14:36
class Student(object):
    def __init__(self, name, score):
        self.__name = name
        self.__score = score

    def print_score(self):
        print ('%s: %s' % (self.__name, self.__score))
bart = Student('Bart Simpson', 98)
bart.print_score()
#print(bart.__score)


class Student(object):
    def __init__(self, name, score):
        self.__name = name
        self.__score = score

    def get_name(self):
        return self.__name

    def get_score(self):
        return self.__score

    def set_name(self, name):
        self.__name = name

    def set_score(self, score):
        self.__score = score

bart = Student('Bart Simpson', 80)
print(bart.get_name())