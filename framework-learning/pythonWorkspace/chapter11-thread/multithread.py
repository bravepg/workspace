# import time, threading
# # 新线程执行的代码
# def loop():
#     print('thread %s is running...' % threading.current_thread().name)
#     n = 0
#     while n < 5:
#         n = n + 1
#         print('thread %s >>> %s' % (threading.current_thread().name, n))
#         time.sleep(1)
#     print('thread %s ended.' % threading.current_thread().name)

# print('thread %s is running...' % threading.current_thread().name)
# t = threading.Thread(target=loop, name='LoopThread')
# t.start()
# # 等待创建的线程结束，才执行主线程
# t.join()
# print('thread %s ended' % threading.current_thread().name)

import time, threading
# 假定这是你的银行存款
balance = 0
lock = threading.Lock()
def change_it(n):
    # 先存后取，结果应为 0
    global balance
    balance = balance + n
    balance = balance - n

def run_thread(n):
    for i in range(10000):
        # 先获取锁
        lock.acquire()
        try:
            change_it(5)
        finally:
            # 改完一定要释放锁
            lock.release()
            pass

t1 = threading.Thread(target=run_thread, args=(5, ))
t2 = threading.Thread(target=run_thread, args=(8, ))
t1.start()
t2.start()
t1.join()
t2.join()
print(balance)

# 在 Python 死循环不会占用 100% cpu，由于 PIL 机制
# import threading, multiprocessing

# def loop():
#     x = 0
#     while True:
#         x = x ^ 1

# for i in range(multiprocessing.cpu_count()):
#     t = threading.Thread(target=loop)
#     t.start()
