# 协程
# 协程看上去也是子程序，但是执行的过程中，在子程序内部可以中断，然后执行别的子程序，在适当的时候再返回执行
# Python 对协程的支持是通过 generator 实现的

# yield 不但可以返回值，也可以接受调用者传递参数
# 协程实现生产者与消费者
# consumer 函数是一个 generator
def consumer():
    r = ''
    while True:
        print('执行啦---', r)
        n = yield r
        print('执行啦++++', r, n)
        if not n:
            return
        print('[CONSUMER] Consuming %s...' % n)
        r = '200 OK'

def produce(c):
    c.send(None) # 启动生成器（类似 JavaScript 中的空启动）
    n = 0
    while n < 5:
        n = n + 1
        print('[PRODUCER] Producing %s...' % n)
        r = c.send(n)
        print('[PRODUCER] Consumer return: %s' % r)
    c.close()

c = consumer()
produce(c)

# for n in c:
#     n

# 子程序就是协程的一种特例