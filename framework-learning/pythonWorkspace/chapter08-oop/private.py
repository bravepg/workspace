class Student(object):
    def __init__(self, name, score):
        self.__name = name
        self.__score = score

    def print_score(self):
        print ('%s: %s' % (self.__name, self.__score))

bart = Student('Bart Simpson', 98)
bart.print_score() # Bart Simpson: 98
# print(bart.__score) # 只有内部可以访问，外部不能访问


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
print(bart.get_name()) # Bart Simpson
