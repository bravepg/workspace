import random, queue
from multiprocessing.managers import BaseManager
from multiprocessing import freeze_support

# 发送任务的队列
task_queue = queue.Queue()
# 接收结果的队列
result_queue = queue.Queue()

# 为解决__main__.<lambda> not found问题
def get_task_queue():
    return task_queue

# 为解决__main__.<lambda> not found问题
def get_result_queue():
    return result_queue

# 从 BaseManager 继承的 QueueManager:
class QueueManager(BaseManager):
    pass

# 把两个 Queue 都注册到网络上, callable 参数关联了 Queue对象
QueueManager.register('get_task_queue', callable=get_task_queue)
QueueManager.register('get_result_queue', callable=get_result_queue)

# 绑定端口5000, 设置验证码'abc'
manager = QueueManager(address=('127.0.0.1', 5000), authkey=b'abc')

def communicate():
    # 获得通过网络访问的 Queue 对象
    task = manager.get_task_queue()
    result = manager.get_result_queue()
    # 放几个任务进去
    for i in range(10):
        n = random.randint(0, 10000)
        print('Put task %d...' % n)
        task.put(n)
    # 从 result 队列读取结果
    print('Try get results...')
    for i in range(10):
        r = result.get(timeout=10)
        print('Result: %s' % r)
    # 关闭
    manager.shutdown()

if __name__ == '__main__':
    freeze_support()
    # 启动 Queue:
    manager.start()
    communicate()
