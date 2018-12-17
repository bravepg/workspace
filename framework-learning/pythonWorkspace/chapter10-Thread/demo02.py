# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-07 11:06:54
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-07 14:03:24

# import time, threading
# # 新线程执行的代码
# def loop():
#     print 'thread %s is running...' % threading.current_thread().name
#     n = 0
#     while n < 5:
#         n = n + 1
#         print 'thread %s >>> %s' % (threading.current_thread().name, n)
#         time.sleep(1)
#     print 'thread %s ended.' % threading.current_thread().name

# print 'thread %s is running...' % threading.current_thread().name
# t = threading.Thread(target=loop, name='LoopThread')
# t.start()
# # 等待创建的线程结束，才执行主线程
# t.join()
# print 'thread %s ended' % threading.current_thread().name

# import time, threading
# # 假定这是你的银行存款
# balance = 0
# lock = threading.Lock()
# def change_it(n):
#     # 先存后取，结果应为0
#     global balance
#     balance = balance + n
#     balance = balance - n

# def run_thread(n):
#     for i in range(10000):
#         # 先获取锁
#         lock.acquire()
#         try:
#             change_it(5)
#         finally:
#             # 改完一定要释放锁
#             lock.release()

# t1 = threading.Thread(target=run_thread, args=(5, ))
# t2 = threading.Thread(target=run_thread, args=(8, ))
# t1.start()
# t2.start()
# t1.join()
# t2.join()
# print balance

# 在Python死循环不会占用100%cpu，由于PIL机制
import threading, multiprocessing

def loop():
    x = 0
    while True:
        x = x ^ 1

for i in range(multiprocessing.cpu_count()):
    t = threading.Thread(target=loop)
    t.start()