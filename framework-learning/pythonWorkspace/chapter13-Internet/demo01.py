# -*- coding: utf-8 -*-
# @Author: gaopeng
# @Date:   2017-02-09 14:51:11
# @Last Modified by:   gaopeng
# @Last Modified time: 2017-02-09 16:10:43

# 客户端
# # 导入socket库
# import socket
# # 创建一个socket
# s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# # 建立连接
# s.connect(('www.sina.com.cn', 80))
# # 发送数据
# s.send('GET / HTTP/1.1\r\nHost: www.sina.com.cn\r\nConnection: close\r\n\r\n')

# # 接收数据
# buffer = []
# while True:
#     # 每次最多接收1k字节
#     d = s.recv(1024)
#     if d:
#         buffer.append(d)
#     else:
#         break
# data = ''.join(buffer)

# # 关闭连接
# s.close()
# header, html = data.split('\r\n\r\n', 1)
# print header
# # 把接收的数据写入文件
# with open('sina.html', 'wb') as f:
#     f.write(html)

# 服务器
import socket, threading, time
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 监听端口
s.bind(('127.0.0.1', 9999))
s.listen(5)
print 'Waiting for connection...'

def tcplink(sock, addr):
    print 'Accept new connection from %s:%s...' % addr
    sock.send('Welcome!')
    while True:
        data = sock.recv(1024)
        time.sleep(1)
        if data == 'exit' or not data:
            break
        sock.send('Hello, %s' % data)
    sock.close()
    print 'Connection from %s:%s closed.' % addr

while True:
    # 接收一个新连接
    sock, addr = s.accept()
    # 创建新线程来处理TCP连接
    t = threading.Thread(target=tcplink, args=(sock, addr))
    t.start()
