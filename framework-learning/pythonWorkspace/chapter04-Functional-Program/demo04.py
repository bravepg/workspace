# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-01-22 17:10:48
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-06-14 15:46:46

# 装饰器
def now():
    print "2013-12-25"
f = now
f()
print(f, now.__name__, f.__name__)
print("==========================")

# 能打印日志的decorator
def log(func):
    def wrapper(*args, **kw):
        print 'call %s():' %func.__name__
        return func(*args, **kw)
    return wrapper

@log
def now():
    print '2013-12-25'
now()
# 由于log是一个decorator，返回一个函数，所以，原来的now函数仍然存在，只是现在同名的now指向了新的函数
# 相当于执行了now = log(now)
print("==========================", now.__name__)


# 能打印日志并且带参数的的decorator
def log(text):
    def decorator(func):
        def wrapper(*args, **kw):
            print '%s, %s():' %(text, func.__name__)
            return func(*args, **kw)
        return wrapper
    return decorator
@log('execute')
def now():
    print '2013-12-25'
now();
# 带参数的decorator的效果 now = log('execute')(now)
print("============================", now.__name__)

# 把原始函数的name复制到wrapper中
import functools
def log(text):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kw):
            print '%s %s():' %(text, func.__name__)
            return func(*args, **kw)
        return wrapper
    return decorator
@log('execute again')
def now():
    print '2013-12-25'
now()
print("======================", now.__name__)


def log(*text):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kw):
            print 'begin call'
            print '%s %s():' %(text, func.__name__)
            # def end(func):
            #     func(*args, **kw)
            #     print 'end call'
            # return end(func)
            func(*args, **kw)
            print 'end call'
            #return re
        return wrapper
    return decorator
@log()
def now():
    print '2013-12-26'
now()

# return一个print的函数并没有实际意义
print '###########'
def func():
    return func1()   # 改行的return并没有意义，因为func1是print
def func1():
    print 'hello'

func()