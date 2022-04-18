# try except finally
try:
    print('try...')
    r = 10 / 0
    print('result: ', r)
except ZeroDivisionError as e:
    print('except:', e)
finally:
    print('finally...')
print('END')

# try...
# except: division by zero
# finally...
# END
print('=======================')

try:
    print('try...')
    r = 10 / int('a')
    print('result: ', r)
except ValueError as e:
    print('ValueError:', e)
except ZeroDivisionError as e:
    print('ZeroDivisionError', e)
else:
    print('no error')
finally:
    print('finally...')
print('END')
# try...
# ValueError: invalid literal for int() with base 10: 'a'
# finally...
# END

def foo(s):
    return 10 / int(s)

def bar(s):
    return foo(s) * 2

def main():
    try:
        bar('0')
    except Exception as e:
        print('Error!')
    finally:
        print('finally...')
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
    except Exception as e:
        logging.exception(e)

main()
print('END')

# 抛出错误
print('--------------')
class FooError(ValueError):
    pass

def foo(s):
    n = int(s)
    if n == 0:
        raise FooError('invalid value: %s' % s)
    return 10 / n
foo('0')
