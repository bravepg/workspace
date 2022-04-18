import asyncio
async def hello():
    print("Hello world!")
    r = await asyncio.sleep(1)
    print("Hello again!")

# 获取 EventLoop
loop = asyncio.get_event_loop()
tasks = [hello(), hello()]
# 执行 coroutine
loop.run_until_complete(asyncio.wait(tasks))
loop.close()
