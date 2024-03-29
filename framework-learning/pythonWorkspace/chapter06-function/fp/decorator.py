# 装饰器
def now():
    print('2013-12-25')
f = now
f()
print(f, now.__name__, f.__name__)

# 能打印日志的 decorator
def log(func):
    def wrapper(*args, **kw):
        print('call %s():' %func.__name__)
        return func(*args, **kw)
    return wrapper

@log
def now():
    print('2013-12-25')
now()
# 由于 log 是一个 decorator，返回一个函数，所以，原来的 now 函数仍然存在，只是现在同名的 now 指向了新的函数
# 相当于执行了 now = log(now)
print("==========================", now.__name__)

# 能打印日志并且带参数的的 decorator
def log(text):
    def decorator(func):
        def wrapper(*args, **kw):
            print('%s, %s():' %(text, func.__name__))
            return func(*args, **kw)
        return wrapper
    return decorator
@log('execute')
def now():
    print('2013-12-25')
now();
# 带参数的 decorator 的效果 now = log('execute')(now)
print("============================", now.__name__)

# 把原始函数的 name 复制到 wrapper 中
import functools
def log(text):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kw):
            print('%s %s():' %(text, func.__name__))
            return func(*args, **kw)
        return wrapper
    return decorator
@log('execute again')
def now():
    print('2013-12-25')
now()
print("======================", now.__name__)

def log(*text):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kw):
            print('begin call')
            print('%s %s():' %(text, func.__name__))
            # def end(func):
            #     func(*args, **kw)
            #     print 'end call'
            # return end(func)
            func(*args, **kw)
            print('end call')
            #return re
        return wrapper
    return decorator
@log()
def now():
    print('2013-12-26')
now()
