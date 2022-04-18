# from multiprocessing import Process
# import os

# 子进程要执行的代码
# def run_proc(name):
#     print('Run child process %s (%s)...' % (name, os.getpid()))

# if __name__ == '__main__':
#     print('Parent process %s.' % os.getpid())
#     p =(Process(target=run_proc, args=('test', )))
#     print('Process will start.')
#     p.start()
#     p.join() # join 方法可以等待子进程结束后再往下执行，用于进程间的同步
#     print('Process end')

# 进程池
# from multiprocessing import Pool
# import os, time, random

# def long_time_task(name):
#     print('Run task %s (%s)...' % (name, os.getpid()))
#     start = time.time()
#     time.sleep(random.random() * 3)
#     end = time.time()
#     print('Task %s runs %0.2f seconds.' % (name, (end - start)))

# if __name__=='__main__':
#     print('Parent process %s.' % os.getpid())
#     p = Pool(4)
#     for i in range(5):
#         p.apply_async(long_time_task, args=(i,))
#     print('Waiting for all subprocesses done...')
#     p.close() # 对于进程池来说，调用 join 之前，必须要调用 close
#     p.join() # join 方法可以等待所有子进程结束后再往下执行，用于进程间的同步
#     print('All subprocesses done.')

# 子进程是外部进程
import subprocess

print('$ nslookup')
p = subprocess.Popen(['nslookup'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
output, err = p.communicate(b'set q=mx\npython.org\nexit\n')
print(output.decode('utf-8'))
print('Exit code:', p.returncode)

# 进程间的通信
from multiprocessing import Process, Queue
import os, time, random
# 写数据进程执行的代码
def write(q):
    print('Process to write: %s' % os.getpid())
    for value in ['A', 'B', 'C']:
        print('Put %s to queue...' % value)
        q.put(value)
        time.sleep(random.random()) # 看到交替执行的效果

def read(q):
    while True:
        value = q.get(True)
        print('Get %s from queue.' % value)

if __name__ == '__main__':
    # 父进程创建Queue，并传给子进程
    q = Queue()
    pw = Process(target=write, args=(q, ))
    pr = Process(target=read, args=(q, ))

    # 启动子进程 pw，写入
    pw.start()
    # 启动子进程 pr，读取
    pr.start()
    # 等待 pw 结束
    pw.join()
    # pr 进程是死循环，无法等待结束，只能强行终止
    pr.terminate()
