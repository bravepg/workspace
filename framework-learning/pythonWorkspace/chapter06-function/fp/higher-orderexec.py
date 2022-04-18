def _odd_iter():
    n = 1
    while True:
        n = n + 2
        yield n

def _not_divisible(n):
    # return lambda x: x % n != 0
        def func(x):
            print(x, n)
            return x % n != 0
        return func

def primes():
    yield 2
    it = _odd_iter() # 初始序列
    
    while True:
        n = next(it)
        yield n
        # next(it) # filter 函数的第二个参数也可以是 generator
        it = filter(_not_divisible(n), it) # 构造新序列

# for n in primes():
#     if n < 100:
#         print(n)
#     else:
#         break

it = primes()
print(it)
print(next(it))
print(next(it))
print(next(it))