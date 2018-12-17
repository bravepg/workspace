# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-03 14:03:05
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-03 14:15:51

# 在没有使用@property之前，使用getter、setter方法
class Student(object):
    def get_score(self):
        return self._score

    def set_score(self, value):
        if not isinstance(value, int):
            raise ValueError("score must be a integer")
        if value < 0 or value > 100:
            raise ValueError("score must between 0 ~ 100")
        self._score = value
s = Student()
s.set_score(60)
print (s.get_score())
# s.set_score(1000)
# print (s.get_score()) ValueError: score must between 0 ~ 100

# 使用@property
class Student(object):
    @property
    def score(self):
        return self._score
    
    @score.setter
    def score(self, value):
        if not isinstance(value, int):
            raise ValueError('score must be integer')
        if value < 0 or value > 100:
            raise ValueError('score must between 0 ~ 100')
        self._score = value
s = Student()
s.score = 60
print(s.score)
# s.score = '123'  # ValueError: score must be integer
# print(s.score)

# 利用@property 还可以只定义getter方法，不定义setter方法（一个只读属性）