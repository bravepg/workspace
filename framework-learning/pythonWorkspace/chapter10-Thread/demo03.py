# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-07 14:03:34
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-07 14:08:16

# ThreadLocal
import threading
# 创建全局ThreadLocal对象
local_school = threading.local()
def process_student():
    print 'Hello, %s (in %s)' % (local_school.student, threading.current_thread().name)

def process_thread(name):
    # 绑定ThreadLocal的student
    local_school.student = name
    process_student()

t1 = threading.Thread(target=process_thread, args=('Alice', ), name='Thread-A')
t2 = threading.Thread(target=process_thread, args=('Bob', ), name='Thread-B')
t1.start()
t2.start()
t1.join()
t2.join()