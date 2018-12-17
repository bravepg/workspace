# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-06 20:24:14
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-07 11:02:10
# from multiprocessing import Process
# import os

# 子进程要执行的代码
# def run_proc(name):
#     print 'Run child process %s (%s)...' % (name, os.getpid())

# if __name__ == '__main__':
#     print 'Parent process %s.' % os.getpid()
#     p = Process(target=run_proc, args=('test', ))
#     print 'Process will start.'
#     p.start()
#     p.join()
#     print 'Process end'

# from multiprocessing import Pool
# import os, time, random

# def long_time_task(name):
#     print 'Run task %s (%s)...' % (name, os.getpid())  
#     start = time.time()
#     time.sleep(random.random() * 3)
#     end = time.time()
#     print 'Task %s run %0.2f seconds.' % (name, (end - start))

# if __name__ == '__main__':
#     print 'Parent process %s.' % os.getpid()
#     p = Pool()
#     for i in range(5):
#         p.apply_async(long_time_task, args=(i, ))
#     print 'Waiting for all subprocess done...'
#     p.close()
#     p.join()
#     print 'All subprocess done.'

# 进程间的通信
from multiprocessing import Process, Queue
import os, time, random
# 写数据进程执行的代码
def write(q):
    for value in ['A', 'B', 'C']:
        print 'Put %s to queue...' % value
        q.put(value)
        time.sleep(random.random())

def read(q):
    while True:
        value = q.get(True)
        print 'Get %s from queue.' % value

if __name__ == '__main__':
    # 父进程创建Queue，并传给子进程
    q = Queue()
    pw = Process(target=write, args=(q, ))
    pr = Process(target=read, args=(q, ))

    # 启动子进程pw，写入
    pw.start()
    # 启动子进程pr，读取
    pr.start()
    # 等待pw结束
    pw.join()
    # pr进程是死循环，无法等待结束，只能强行终止
    pr.terminate()