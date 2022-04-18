import asyncio
import threading

@asyncio.coroutine
def hello():
    print('Hello world! (%s)' % threading.currentThread())

    # 异步调用 asyncio.sleep(1)
    r = yield from asyncio.sleep(1)
    print('Hello again! (%s)' % threading.currentThread())

# 获取 EventLoop
loop = asyncio.get_event_loop()
tasks = [hello(), hello()]
# 执行 coroutine
loop.run_until_complete(asyncio.wait(tasks))
loop.close()

# Hello world! (<_MainThread(MainThread, started 4307879296)>)
# Hello world! (<_MainThread(MainThread, started 4307879296)>)
# (暂停约1秒)
# Hello again! (<_MainThread(MainThread, started 4307879296)>)
# Hello again! (<_MainThread(MainThread, started 4307879296)>)
