# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-05 15:06:06
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-05 15:37:52

# try except finally
try:
    print 'try...'
    r = 10 / 0
    print 'result: ', r
except ZeroDivisionError, e:
    print 'except:', e
finally:
    print 'finally...'
print 'END'
# try...
# except: integer division or modulo by zero
# finally...
# END
print  '======================='

try:
    print 'try...'
    r = 10 / int('a')
    print 'result: ', r
except ValueError, e:
    print 'ValueError:', e
except ZeroDivisionError, e:
    print 'ZeroDivisionError', e
else:
    print 'no error'
finally:
    print 'finally...'
print 'END'

def foo(s):
    return 10 / int(s)

def bar(s):
    return foo(s) * 2

def main():
    try:
        bar('0')
    except StandardError, e:
        print 'Error!'
    finally:
        print 'finally...'
main()

# 记录错误
import logging
def foo(s):
    return 10 / int(s)

def bar(s):
    return foo(s) * 2

def main():
    try:
        bar('0')
    except StandardError, e:
        logging.exception(e)

main()
print 'END'

# 抛出错误
print '--------------'
class FooError(StandardError):
    pass

def foo(s):
    n = int(s)
    if n == 0:
        raise FooError('invalid value: %s' % s)
    return 10 / n
foo('0')