# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-09 15:52:46
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-09 15:57:02

# 客户端程序
import socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 建立连接:
s.connect(('127.0.0.1', 9999))
# 接收欢迎消息:
print s.recv(1024)
for data in ['Michael', 'Tracy', 'Sarah']:
    # 发送数据:
    s.send(data)
    print s.recv(1024)
s.send('exit')
s.close()