# ThreadLocal
import threading
# 创建全局 ThreadLocal 对象
local_school = threading.local()
def process_student():
    # Hello, Alice (in Thread-A)
    # Hello, Bob (in Thread-B)
    print('Hello, %s (in %s)' % (local_school.student, threading.current_thread().name))

def process_thread(name):
    # 绑定 ThreadLocal 的 student
    local_school.student = name
    process_student()

t1 = threading.Thread(target=process_thread, args=('Alice', ), name='Thread-A')
t2 = threading.Thread(target=process_thread, args=('Bob', ), name='Thread-B')
t1.start()
t2.start()
t1.join()
t2.join()
